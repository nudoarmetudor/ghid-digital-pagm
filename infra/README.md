# Găzduire pe ghid.lappsus.com

Ghidul e public, deschis oricui, fără cont și fără cheie. Un singur container, `web`
(`caddy:2-alpine`), servește folderul `docs/` (ghidul construit de
`.github/workflows/publica.yml`) și nimic altceva din depozit. Stă în rețeaua externă
`edge`, cu alias-ul `ghid-web`; proxy-ul public al serverului (depozitul
`nudoarmetudor/lappsus`, `infra/caddy/Caddyfile`) trimite `ghid.lappsus.com` aici și pune
certificatul și antetele de securitate. Pe loopback, `127.0.0.1:3300`, pentru verificarea
deploy-ului.

Deploy-ul: `infra/poll.sh` din cron, în fiecare minut; când `main` s-a mișcat, rulează
`infra/deploy.sh` (checkout, apoi recrearea containerului dacă s-a schimbat `infra/`, sau
pornirea lui dacă lipsește). Depozitul e public, deci serverul îl citește prin HTTPS, fără
cheie.

## O singură dată, pe server

Din hPanel → VPS → Browser terminal. Ca `root`:

```bash
mkdir -p /srv/ghid-digital-pagm && chown lappsus:lappsus /srv/ghid-digital-pagm
```

Apoi `su - lappsus` și:

```bash
git clone https://github.com/nudoarmetudor/ghid-digital-pagm.git /srv/ghid-digital-pagm
cd /srv/ghid-digital-pagm && ./infra/deploy.sh
( crontab -l; echo '* * * * * /srv/ghid-digital-pagm/infra/poll.sh >> /home/lappsus/ghid-poll.log 2>&1' ) | crontab -
```

`deploy.sh` se termină cu „serving …” când containerul răspunde. De acolo, orice
schimbare pe `main` ajunge pe site în cel mult un minut după ce workflow-ul a publicat-o.
