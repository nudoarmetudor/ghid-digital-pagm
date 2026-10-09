---
title: Protejați conturile asociației într-o seară
description: Inventarul conturilor, parole noi, verificarea în doi pași și reguli clare de acces, ca asociația să nu-și piardă e-mailul sau pagina de Facebook.
tags: [siguranta, cum-sa-faci]
durata: 2 ore
nivel: Începător
instrumente: [Bitwarden, Autentificarea în doi pași, Have I Been Pwned]
---

> [!example] Situația
> Pagina de Facebook a asociației are câțiva ani de postări și e administrată de fosta președintă, plecată între timp la muncă în străinătate, și de un voluntar. Parola de la e-mailul asociației o știu mai mulți oameni și e scrisă într-un caiet din dulap. Săptămâna trecută, pagina a primit un mesaj „de la Meta” care cerea confirmarea contului printr-un link, altfel pagina „va fi închisă”. Conducerea hotărăște să facă ordine într-o seară, împreună.

## De ce aveți nevoie
- Două persoane din conducere, fiecare cu telefonul ei și cu acces la e-mailul asociației.
- Un calculator sau un telefon cu internet bun.
- O foaie de hârtie și un plic pentru codurile de rezervă.
- Conturi gratuite [[instrumente/bitwarden|Bitwarden]] pentru cei doi.

## Pașii
1. **Faceți lista conturilor**, fără parole: e-mailul asociației, pagina de Facebook, Instagram, contul Google, site-ul, orice alt serviciu. Lângă fiecare scrieți cine are acces azi și ce număr de telefon și ce e-mail de recuperare sunt setate.
2. **Verificați scurgerile de date.** Treceți adresa asociației și adresele administratorilor prin [[instrumente/have-i-been-pwned|Have I Been Pwned]]. Unde apar parole scăpate, acele conturi au prioritate.
3. **Schimbați parola e-mailului asociației** cu una nouă, lungă, făcută de generatorul din Bitwarden. Salvați-o în Bitwarden și partajați-o doar cu cealaltă persoană din conducere.
4. **Activați verificarea în doi pași pe e-mail**, cu o aplicație de coduri pe telefonul unei persoane care rămâne în asociație. Pașii sunt pe pagina [[instrumente/autentificare-doi-pasi|Autentificarea în doi pași]].
5. **Actualizați datele de recuperare**: numărul de telefon și e-mailul de rezervă să fie ale unor oameni din conducerea actuală.
6. **Ordonați accesul la pagina de Facebook.** Din setările paginii, la secțiunea de acces, verificați cine are drepturi. Pagina să aibă cel puțin doi administratori activi, fiecare cu contul personal protejat prin verificare în doi pași. Retrageți accesul celor care nu mai lucrează cu asociația, după ce ați vorbit cu ei.
7. **Tipăriți sau scrieți codurile de rezervă** pentru e-mail și pentru conturile de Facebook ale administratorilor. Puneți-le în plic, în locul unde asociația își ține ștampila și actele.
8. **Distrugeți paginile cu parole din caiet** după ce totul e în Bitwarden și ați verificat că vă puteți conecta.
9. **Scrieți o regulă scurtă** de acces, cu promptul de mai jos, și aprobați-o la următoarea ședință.

> [!tip] Cu AI
> Un asistent AI vă poate ajuta cu textul regulii interne. Nu scrieți în el parole, adrese de e-mail sau nume:
> ```text
> Scrieți o regulă internă scurtă, de maximum o pagină, pentru o asociație obștească mică, despre accesul la conturile online ale asociației (e-mail, Facebook, Instagram, site).
> Includeți: cine poate avea acces și cine decide, minimum doi administratori, verificarea în doi pași obligatorie, unde se țin parolele și codurile de rezervă, ce se întâmplă când cineva pleacă din asociație, cum reacționăm la un mesaj suspect sau la un cont spart.
> Limbaj simplu, fără termeni juridici, sub formă de listă numerotată.
> ```

> [!danger] Mesajele „de la Meta” sau „de la Facebook”
> Mesajele care spun că pagina va fi închisă, că ați încălcat drepturi de autor sau că trebuie să vă „verificați” contul printr-un link sunt de obicei încercări de a vă fura contul. Nu apăsați pe link. Verificați notificările direct din aplicația Facebook sau din [Centrul de conturi](https://accountscenter.facebook.com/password_and_security). Dacă un cont a fost deja spart, porniți de la [facebook.com/hacked](https://www.facebook.com/hacked).

## Verificați la final
- [ ] Aveți lista conturilor asociației, cu cine are acces la fiecare.
- [ ] E-mailul asociației are parolă nouă și verificare în doi pași.
- [ ] Datele de recuperare (telefon, e-mail) sunt ale unor oameni din conducerea actuală.
- [ ] Pagina de Facebook are cel puțin doi administratori activi, cu conturi protejate.
- [ ] Codurile de rezervă sunt pe hârtie, într-un loc sigur, cunoscut de două persoane.
- [ ] Nicio parolă nu mai circulă în grupuri de Viber, WhatsApp sau Messenger.
- [ ] Regula de acces e scrisă și pusă pe ordinea de zi a ședinței.

## Mergeți mai departe
- [[cum-sa-faci/drive-comun-asociatie|Un Drive comun al asociației]], ca documentele să nu depindă de un singur cont personal
- [[cum-sa-faci/recunoaste-dezinformarea|Recunoașteți dezinformarea și imaginile false]]
- [[nevoi/siguranta|Siguranță online]]
