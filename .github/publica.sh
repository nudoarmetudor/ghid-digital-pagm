#!/usr/bin/env bash
# Înlocuiește site-ul publicat din rădăcina depozitului cu cel nou construit.
# Rădăcina conține doar site-ul generat plus fișierele din PASTREAZA; orice altceva
# pus în rădăcină de mână se șterge la următoarea publicare. Textele se editează în sursa/.
set -euo pipefail
NOU="${1:?dosarul cu site-ul construit}"
PASTREAZA=(.git .github sursa README.md LICENSE .nojekyll .gitignore "$NOU")

for f in .[!.]* *; do
  [ -e "$f" ] || continue
  pastrat=0
  for p in "${PASTREAZA[@]}"; do [ "$f" = "$p" ] && pastrat=1; done
  [ $pastrat -eq 1 ] || rm -rf -- "$f"
done

cp -R "$NOU"/. .
rm -rf -- "$NOU"
touch .nojekyll
