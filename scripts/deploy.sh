#!/usr/bin/env bash
# Build the sim and publish it to the gh-pages branch (adapted from IEEE-telepresence-shared-control).
#
#   ./scripts/deploy.sh            # build + push gh-pages
#   ./scripts/deploy.sh --build    # build only (no push), for checking the base path locally
#
# The base path comes from the repo name, so a GitHub Pages PROJECT site
# (https://<owner>.github.io/<repo>/) resolves its assets. Publishing goes through an isolated git
# worktree, so your current branch and working tree are never touched. Serving Pages from gh-pages is a
# one-time repo setting; pushing this branch alone does not make anything live.
set -euo pipefail

cd "$(dirname "$0")/.."
REPO_NAME="$(basename -s .git "$(git config --get remote.origin.url)")"
BASE="/${REPO_NAME}/"
BUILD_ONLY="${1:-}"

echo "==> Building web/ (base=${BASE})"
npm --prefix web ci
SITE_BASE="$BASE" npm --prefix web run build
touch web/dist/.nojekyll   # stop GitHub Pages running Jekyll (it drops _-prefixed files)

if [ "$BUILD_ONLY" = "--build" ]; then
  echo "==> Build only. Site at web/dist (base ${BASE}). Try: npm --prefix web run preview"
  exit 0
fi

echo "==> Publishing to gh-pages"
WT="$(mktemp -d)"
trap 'git worktree remove --force "$WT" 2>/dev/null || true' EXIT
if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
  git fetch origin gh-pages
  git worktree add "$WT" -B gh-pages origin/gh-pages
else
  git worktree add --detach "$WT" HEAD
  git -C "$WT" checkout --orphan gh-pages
  git -C "$WT" rm -rf . >/dev/null 2>&1 || true
fi

find "$WT" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a web/dist/. "$WT"/
git -C "$WT" add -A
if git -C "$WT" diff --cached --quiet; then
  echo "==> No changes to publish."
else
  git -C "$WT" commit -q -m "Deploy site ($(git rev-parse --short HEAD), base ${BASE})"
  git -C "$WT" push origin gh-pages
  echo "==> Pushed gh-pages."
fi

OWNER="$(git config --get remote.origin.url | sed -E 's#.*[/:]([^/]+)/[^/]+$#\1#' | tr 'A-Z' 'a-z')"
echo "==> Done. Once Pages is enabled (gh-pages / root): https://${OWNER}.github.io/${REPO_NAME}/"
