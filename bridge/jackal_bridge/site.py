"""--serve-site: the bridge also serves the sim page, at http://localhost:<port>/Hackathon/.

Why: a page on GitHub Pages is https, and browsers treat https → ws://localhost as mixed content. Chrome
asks for local-network permission, and Safari silently refuses (no prompt at all). A page served from
the bridge's own http://localhost origin has neither problem, and it keeps working on bad event wifi
because nothing loads from the internet after the first download.

Where the site files come from (first match wins):
  1. --site-dir PATH                  an explicit built site (a folder containing index.html)
  2. <repo>/web/dist                  a local `npm run build` (staff machines)
  3. the download cache               ~/.cache/jackal-bridge/site, filled from the published gh-pages
                                      branch on first use (or with --update-site)
"""
from __future__ import annotations

import io
import logging
import mimetypes
import os
import shutil
import tempfile
import urllib.request
import zipfile
from pathlib import Path
from urllib.parse import unquote, urlsplit

from websockets.datastructures import Headers
from websockets.http11 import Request, Response

log = logging.getLogger("jackal_bridge")

PREFIX = "/Hackathon/"  # the GitHub Pages project path; the build uses the same base
SITE_ZIP_URL = "https://github.com/AHRTLab/Hackathon/archive/refs/heads/gh-pages.zip"
REPO_DIST = Path(__file__).resolve().parents[2] / "web" / "dist"
CACHE_DIR = Path(os.environ.get("JACKAL_SITE_CACHE") or Path.home() / ".cache" / "jackal-bridge" / "site")

# Tells the page it was served by the bridge, so it connects back to the same origin (bridgeClient.ts).
SAME_ORIGIN_META = '<meta name="jackal-bridge" content="same-origin">'

TYPES = {".wasm": "application/wasm", ".js": "text/javascript", ".mjs": "text/javascript",
         ".json": "application/json", ".html": "text/html; charset=utf-8", ".css": "text/css",
         ".stl": "model/stl", ".xml": "application/xml", ".svg": "image/svg+xml", ".map": "application/json"}


class SiteError(RuntimeError):
    pass


# ------------------------------------------------------------------------------------- finding the files
def _is_site(d: Path) -> bool:
    return (d / "index.html").is_file()


def download_site(url: str = SITE_ZIP_URL, dest: Path = CACHE_DIR) -> Path:
    """Fetch the published site (a zip of the gh-pages branch) into `dest`, replacing what was there."""
    log.info("downloading the sim site from %s …", url)
    try:
        with urllib.request.urlopen(url, timeout=60) as r:
            data = r.read()
    except OSError as e:
        raise SiteError(f"could not download the site ({e}). Check your internet connection, or build it: "
                        "cd web && npm install && npm run build") from None
    try:
        zf = zipfile.ZipFile(io.BytesIO(data))
    except zipfile.BadZipFile:
        raise SiteError(f"{url} did not return a zip file") from None
    names = [n for n in zf.namelist() if not n.endswith("/")]
    # GitHub zips wrap everything in one top folder ("Hackathon-gh-pages/"); strip it if present.
    tops = {n.split("/", 1)[0] for n in names}
    strip = (tops.pop() + "/") if len(tops) == 1 and all("/" in n for n in names) else ""
    tmp = Path(tempfile.mkdtemp(prefix="jackal-site-"))
    try:
        for n in names:
            rel = n[len(strip):]
            target = (tmp / rel).resolve()
            if not str(target).startswith(str(tmp.resolve()) + os.sep):
                raise SiteError(f"refusing unsafe path in site zip: {n}")
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(zf.read(n))
        if not _is_site(tmp):
            raise SiteError(f"{url} has no index.html at its root")
        if dest.exists():
            shutil.rmtree(dest)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(tmp), dest)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    log.info("site cached in %s (%.1f MB)", dest, sum(f.stat().st_size for f in dest.rglob("*") if f.is_file()) / 1e6)
    return dest


def resolve_site(site_dir: str | None = None, update: bool = False) -> Path:
    if site_dir:
        d = Path(site_dir).expanduser().resolve()
        if not _is_site(d):
            raise SiteError(f"--site-dir {d} has no index.html")
        return d
    if not update and _is_site(REPO_DIST):
        return REPO_DIST
    if update or not _is_site(CACHE_DIR):
        return download_site()
    return CACHE_DIR


# ------------------------------------------------------------------------------------- serving
class SiteServer:
    """Answers plain-HTTP requests on the bridge port; WebSocket upgrades pass through untouched."""

    def __init__(self, root: Path, ws_paths: set[str]):
        self.root = root.resolve()
        self.ws_paths = ws_paths

    def _response(self, status: int, reason: str, body: bytes, ctype: str, extra: dict[str, str] | None = None) -> Response:
        h = Headers()
        h["Content-Type"] = ctype
        h["Content-Length"] = str(len(body))
        h["Cache-Control"] = "no-cache"
        for k, v in (extra or {}).items():
            h[k] = v
        return Response(status, reason, h, body)

    def handle(self, request: Request) -> Response | None:
        if request.headers.get("Upgrade", "").lower() == "websocket":
            return None  # a WebSocket handshake: let the bridge handle it
        path = unquote(urlsplit(request.path).path)
        if path in self.ws_paths:
            return self._response(426, "Upgrade Required", b"This is a WebSocket endpoint.\n", "text/plain")
        if path in ("/", PREFIX.rstrip("/")):
            return self._response(302, "Found", b"", "text/plain", {"Location": PREFIX})
        if not path.startswith(PREFIX):
            return self._response(404, "Not Found", b"Not found. The sim is at " + PREFIX.encode() + b"\n", "text/plain")
        rel = path[len(PREFIX):] or "index.html"
        f = (self.root / rel).resolve()
        if f.is_dir():
            f = f / "index.html"
        if not str(f).startswith(str(self.root) + os.sep) or not f.is_file():
            return self._response(404, "Not Found", b"Not found\n", "text/plain")
        body = f.read_bytes()
        ctype = TYPES.get(f.suffix.lower()) or mimetypes.guess_type(f.name)[0] or "application/octet-stream"
        if f.name == "index.html":
            body = body.replace(b"<head>", b"<head>\n    " + SAME_ORIGIN_META.encode(), 1)
        return self._response(200, "OK", body, ctype)
