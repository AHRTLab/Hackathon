"""jackal-bridge command line. Run it, open the sim page, then start your controller."""
from __future__ import annotations

import argparse
import asyncio
import logging
import sys

from .arbitration import SourceArbiter
from .core import Bridge
from .ingress.lsl import LslIngress, lsl_available
from .ingress.udp import start_udp
from .protocol import LIMITS, PROTOCOL_VERSION
from .server import BridgeServer
from .status import console_loop


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    ap = argparse.ArgumentParser(prog="jackal-bridge", description=__doc__)
    ap.add_argument("--port", type=int, default=LIMITS["ports"]["ws"], help="WebSocket port (default %(default)s)")
    ap.add_argument("--udp-port", type=int, default=LIMITS["ports"]["udp"], help="UDP port (default %(default)s)")
    ap.add_argument("--host", default="localhost", help="WebSocket bind host (default %(default)s)")
    ap.add_argument("--source", choices=["lsl", "udp", "ws"], help="only accept driving commands from this transport")
    ap.add_argument("--no-lsl", action="store_true", help="disable LSL ingress")
    ap.add_argument("--quiet", action="store_true", help="no live status line")
    ap.add_argument("--serve-site", action="store_true",
                    help="also serve the sim page at http://localhost:PORT/Hackathon/ (works in Safari, no Chrome prompt, offline)")
    ap.add_argument("--site-dir", help="serve this built site folder instead of web/dist or the download cache")
    ap.add_argument("--update-site", action="store_true", help="re-download the published site into the cache (implies --serve-site)")
    ap.add_argument("--open", action="store_true", help="open the served sim page in your default browser (implies --serve-site)")
    ap.add_argument("--loopback-test", action="store_true", help="check a running bridge + open sim page, then exit")
    ap.add_argument("-v", "--verbose", action="store_true")
    return ap.parse_args(argv)


async def run(args: argparse.Namespace) -> None:
    bridge = Bridge(arbiter=SourceArbiter(pin=args.source))
    site = None
    if args.serve_site or args.site_dir or args.update_site or args.open:
        from .site import PREFIX, SiteError, SiteServer, resolve_site
        try:
            root = resolve_site(args.site_dir, update=args.update_site)
        except SiteError as e:
            sys.exit(f"jackal-bridge: {e}")
        site = SiteServer(root, set(LIMITS["paths"].values()))
        site_url = f"http://localhost:{args.port}{PREFIX}"
    server = BridgeServer(bridge, args.host, args.port, site=site)
    udp = await start_udp(bridge, "127.0.0.1", args.udp_port)
    lsl = None
    if args.no_lsl:
        bridge.lsl_status = "disabled (--no-lsl)"
    else:
        ok, why = lsl_available()
        bridge.lsl_status = why
        if ok:
            lsl = LslIngress(bridge, asyncio.get_running_loop())
            lsl.start()
            from .egress.lsl_out import LslOutlets
            server.lsl_out = LslOutlets()
    async with server.serve():
        print(f"jackal-bridge {PROTOCOL_VERSION}: browser ws://{args.host}:{args.port}/sim · "
              f"commands ws://{args.host}:{args.port}/cmd, udp 127.0.0.1:{args.udp_port}, LSL JackalCmd · "
              f"state ws://{args.host}:{args.port}/state" + (f" · pinned to {args.source}" if args.source else ""),
              flush=True)
        if lsl is None:
            print(f"LSL {bridge.lsl_status}", flush=True)
        if site is not None:
            print(f"sim page: {site_url}   (serving {site.root})", flush=True)
            if args.open:
                import webbrowser
                webbrowser.open(site_url)
        tasks = [asyncio.create_task(server.status_loop())]
        if not args.quiet:
            tasks.append(asyncio.create_task(console_loop(bridge, lambda: server.browser is not None)))
        try:
            await asyncio.Future()  # run forever
        finally:
            for t in tasks:
                t.cancel()
            udp.close()
            if lsl:
                lsl.stop()


def main(argv: list[str] | None = None) -> None:
    args = parse_args(argv)
    logging.basicConfig(level=logging.DEBUG if args.verbose else logging.INFO, format="\n[%(levelname)s] %(message)s")
    if args.loopback_test:
        from .loopback import run_loopback
        sys.exit(0 if asyncio.run(run_loopback(args.port)) else 1)
    try:
        asyncio.run(run(args))
    except KeyboardInterrupt:
        print("\njackal-bridge stopped.")
    except OSError as e:
        sys.exit(
            f"jackal-bridge: {e}\n"
            f"Another program (or another bridge) is using port {args.port} or UDP {args.udp_port}. Either stop it, or pick\n"
            f"a free port and tell the page:  jackal-bridge --port <PORT>   then open the sim with  ?bridge=ws://localhost:<PORT>/sim\n"
            f"(find who holds it: lsof -nP -iTCP:{args.port} -sTCP:LISTEN   on Windows: netstat -ano | findstr {args.port})"
        )


if __name__ == "__main__":
    main()
