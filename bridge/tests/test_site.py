"""--serve-site: the bridge serves the sim page on its own origin; WebSockets keep working beside it."""
import asyncio
import io
import json
import socket
import threading
import urllib.error
import urllib.request
import zipfile
from functools import partial
from http.server import HTTPServer, SimpleHTTPRequestHandler

import pytest
import websockets

from jackal_bridge import site as site_mod
from jackal_bridge.core import Bridge
from jackal_bridge.protocol import LIMITS
from jackal_bridge.server import BridgeServer
from jackal_bridge.site import PREFIX, SAME_ORIGIN_META, SiteError, SiteServer, download_site, resolve_site

INDEX = b"<!doctype html>\n<html><head><title>Jackal Sim</title></head><body>sim</body></html>\n"


def free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


@pytest.fixture
def site_dir(tmp_path):
    (tmp_path / "assets").mkdir()
    (tmp_path / "index.html").write_bytes(INDEX)
    (tmp_path / "assets" / "mujoco.wasm").write_bytes(b"\x00asm" + b"\x00" * 100)
    (tmp_path / "assets" / "index.js").write_text("console.log(1)")
    (tmp_path / "courses").mkdir()
    (tmp_path / "courses" / "L0.json").write_text('{"id":"L0"}')
    (tmp_path.parent / "secret.txt").write_text("nope")
    return tmp_path


@pytest.fixture
async def served(site_dir):
    port = free_port()
    server = BridgeServer(Bridge(), "127.0.0.1", port, site=SiteServer(site_dir, set(LIMITS["paths"].values())))
    async with server.serve():
        yield f"127.0.0.1:{port}"


def get(url: str):
    """Plain HTTP GET in a thread (urllib), returning (status, headers, body); no redirects followed."""
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None
    opener = urllib.request.build_opener(NoRedirect)
    try:
        with opener.open(url, timeout=5) as r:
            return r.status, r.headers, r.read()
    except urllib.error.HTTPError as e:
        return e.code, e.headers, e.read()


async def aget(url):
    return await asyncio.to_thread(get, url)


async def test_index_served_with_same_origin_marker(served):
    status, headers, body = await aget(f"http://{served}{PREFIX}")
    assert status == 200 and headers["Content-Type"].startswith("text/html")
    assert SAME_ORIGIN_META.encode() in body and b"<title>Jackal Sim</title>" in body


async def test_assets_get_correct_types(served):
    status, headers, body = await aget(f"http://{served}{PREFIX}assets/mujoco.wasm")
    assert status == 200 and headers["Content-Type"] == "application/wasm" and body.startswith(b"\x00asm")
    assert (await aget(f"http://{served}{PREFIX}assets/index.js"))[1]["Content-Type"] == "text/javascript"
    assert (await aget(f"http://{served}{PREFIX}courses/L0.json"))[2] == b'{"id":"L0"}'


async def test_root_redirects_to_sim(served):
    status, headers, _ = await aget(f"http://{served}/")
    assert status == 302 and headers["Location"] == PREFIX


@pytest.mark.parametrize("path", ["../secret.txt", "..%2Fsecret.txt", "assets/../../secret.txt", "missing.js"])
async def test_no_escape_and_404s(served, path):
    status, _, body = await aget(f"http://{served}{PREFIX}{path}")
    assert status == 404 and b"nope" not in body


async def test_ws_paths_still_websockets(served):
    assert (await aget(f"http://{served}/sim"))[0] == 426  # plain GET on a WS path
    async with websockets.connect(f"ws://{served}/sim") as ws:
        assert json.loads(await ws.recv())["type"] == "bridge_status"


async def test_no_site_means_no_http(site_dir):
    port = free_port()
    async with BridgeServer(Bridge(), "127.0.0.1", port).serve():
        status, _, _ = await aget(f"http://127.0.0.1:{port}{PREFIX}")
        assert status != 200  # without --serve-site the bridge is WebSocket-only


# ---------------------------------------------------------------------------------- download / resolve
def make_zip(entries: dict[str, bytes]) -> bytes:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w") as z:
        for name, data in entries.items():
            z.writestr(name, data)
    return buf.getvalue()


@pytest.fixture
def zip_server(tmp_path):
    """Serve files from tmp_path/www over http://127.0.0.1:<port>/ (stands in for github.com)."""
    www = tmp_path / "www"
    www.mkdir()
    httpd = HTTPServer(("127.0.0.1", 0), partial(SimpleHTTPRequestHandler, directory=str(www)))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    yield www, f"http://127.0.0.1:{httpd.server_address[1]}"
    httpd.shutdown()


def test_download_flat_zip_like_pages_site_zip(zip_server, tmp_path):
    www, base = zip_server
    (www / "site.zip").write_bytes(make_zip({"index.html": INDEX, "assets/mujoco.wasm": b"\x00asm", "courses/L1.json": b"{}"}))
    dest = tmp_path / "cache"
    assert download_site(f"{base}/site.zip", dest) == dest
    assert (dest / "index.html").read_bytes() == INDEX and (dest / "courses" / "L1.json").exists()


def test_download_strips_github_top_folder(zip_server, tmp_path):
    www, base = zip_server
    (www / "site.zip").write_bytes(make_zip({
        "Hackathon-gh-pages/index.html": INDEX,
        "Hackathon-gh-pages/assets/mujoco.wasm": b"\x00asm",
        "Hackathon-gh-pages/.nojekyll": b"",
    }))
    dest = tmp_path / "cache"
    out = download_site(f"{base}/site.zip", dest)
    assert out == dest and (dest / "index.html").read_bytes() == INDEX and (dest / "assets" / "mujoco.wasm").exists()


def test_download_rejects_unsafe_and_bad_zips(zip_server, tmp_path):
    www, base = zip_server
    (www / "evil.zip").write_bytes(make_zip({"index.html": INDEX, "../../escape.txt": b"x"}))
    (www / "nozip.zip").write_bytes(b"not a zip")
    (www / "empty.zip").write_bytes(make_zip({"readme.txt": b"x"}))
    for name in ("evil.zip", "nozip.zip", "empty.zip", "missing.zip"):
        with pytest.raises(SiteError):
            download_site(f"{base}/{name}", tmp_path / "cache")
    assert not (tmp_path / "cache").exists()


def test_resolve_order(site_dir, tmp_path, monkeypatch):
    assert resolve_site(str(site_dir)) == site_dir.resolve()             # 1. explicit --site-dir
    with pytest.raises(SiteError):
        resolve_site(str(tmp_path / "nothing"))
    monkeypatch.setattr(site_mod, "REPO_DIST", site_dir)
    assert resolve_site() == site_dir                                     # 2. local web/dist build
    cache = tmp_path / "cache"
    monkeypatch.setattr(site_mod, "REPO_DIST", tmp_path / "no-dist")
    monkeypatch.setattr(site_mod, "CACHE_DIR", cache)
    monkeypatch.setattr(site_mod, "download_site", lambda: (cache.mkdir(), (cache / "index.html").write_bytes(INDEX), cache)[2])
    assert resolve_site() == cache                                        # 3. download into the cache once…
    assert resolve_site() == cache                                        #    …then reuse it
