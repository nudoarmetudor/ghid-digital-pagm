#!/usr/bin/env bash
# Deploy the guide on the VPS. Run by infra/poll.sh, or by hand.
# The guide is committed already built (docs/, by .github/workflows/publica.yml),
# so a deploy is a checkout plus, when the server config changed, a recreate.
set -euo pipefail
cd "$(dirname "$0")/.."

exec 9>/tmp/ghid-deploy.lock
flock -w 300 9 || { echo "another deploy holds the lock" >&2; exit 1; }

COMPOSE="docker compose -f infra/compose.yml"
PREVIOUS=$(git rev-parse HEAD)
git fetch --quiet origin main
git reset --hard --quiet origin/main
echo "==> $(git rev-parse --short "$PREVIOUS") -> $(git rev-parse --short HEAD)"

if ! git diff --quiet "$PREVIOUS" HEAD -- infra/ ; then
  # Recreate rather than reload: on this box `caddy reload` has reported
  # success while the old config kept serving.
  echo "==> server config changed - recreating"
  $COMPOSE up -d --force-recreate
elif ! docker ps --format '{{.Names}}' | grep -qx ghid-web-1; then
  echo "==> starting"
  $COMPOSE up -d
else
  echo "==> files updated in place"
fi

for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -fsS http://127.0.0.1:3300/healthz >/dev/null 2>&1 \
     && curl -fsS http://127.0.0.1:3300/ 2>/dev/null | grep -qi '<html'; then
    echo "==> serving $(git rev-parse --short HEAD)"; exit 0
  fi
  sleep 2
done
echo "!! not answering on 127.0.0.1:3300 (/healthz or /)" >&2
$COMPOSE logs --tail 30 web >&2
exit 1
