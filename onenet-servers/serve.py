#!/usr/bin/env python3
"""
Simple dev server for OneNet Servers static site.
Rewrites clean URLs to .html files so local navigation works.

Mapping rules (tried in order):
  /               → index.html
  /foo            → foo.html  OR  foo/index.html
  /foo/bar        → foo/bar.html  OR  foo/bar/index.html
  Static assets   → served as-is (CSS, JS, SVG, images, …)
"""
import http.server
import os
import urllib.parse

PORT = 3000
BIND = "127.0.0.1"
ROOT = os.path.dirname(os.path.abspath(__file__))


class RewriteHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path
        path = urllib.parse.unquote(path)

        # Strip leading slash for filesystem lookup
        rel = path.lstrip("/")

        # 1. Exact file exists → serve as-is (assets, CSS, JS, etc.)
        fs_exact = os.path.join(ROOT, rel)
        if os.path.isfile(fs_exact):
            return super().do_GET()

        # 2. Try appending .html
        if not rel.endswith(".html"):
            fs_html = os.path.join(ROOT, rel + ".html") if rel else os.path.join(ROOT, "index.html")
            if os.path.isfile(fs_html):
                self.path = ("/" + rel + ".html") if rel else "/index.html"
                return super().do_GET()

        # 3. Try as a directory with index.html
        fs_index = os.path.join(ROOT, rel, "index.html") if rel else os.path.join(ROOT, "index.html")
        if os.path.isfile(fs_index):
            self.path = ("/" + rel + "/index.html") if rel else "/index.html"
            return super().do_GET()

        # 4. Fallback → let SimpleHTTPRequestHandler return 404
        return super().do_GET()

    def log_message(self, fmt, *args):
        # Quieter logging — skip 304s
        if args and str(args[1]) == "304":
            return
        super().log_message(fmt, *args)


if __name__ == "__main__":
    os.chdir(ROOT)
    server = http.server.HTTPServer((BIND, PORT), RewriteHandler)
    print(f"Serving OneNet Servers at http://{BIND}:{PORT}/")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
