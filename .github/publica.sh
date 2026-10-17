#!/usr/bin/env bash
# Publică site-ul construit de Quartz în două locuri:
#  - docs/           : copia servită de ghid.lappsus.com (serverul servește DOAR acest dosar);
#  - rădăcina depozitului : oglinda de pe GitHub Pages (nudoarmetudor.github.io/ghid-digital-pagm),
#                      păstrată cât timp codurile QR vechi trimit acolo.
# În rădăcină se șterg doar intrările publicate data trecută (lista din .publicat), așa că
# alte dosare (sursa/, infra/, docs/ etc.) nu sunt atinse. Textele se editează în sursa/content.
set -euo pipefail
NOU="${1:?dosarul cu site-ul construit}"
LISTA=.publicat

rm -rf docs
mkdir -p docs
cp -R "$NOU"/. docs/
touch docs/.nojekyll

if [ -f "$LISTA" ]; then
  while IFS= read -r intrare; do
    case "$intrare" in ""|.|..|.git|.github|sursa|docs|infra|README.md|LICENSE) continue ;; esac
    rm -rf -- "./$intrare"
  done < "$LISTA"
fi
( cd "$NOU" && ls -A ) > "$LISTA"
cp -R "$NOU"/. .
touch .nojekyll
rm -rf -- "$NOU"
