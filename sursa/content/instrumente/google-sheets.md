---
title: Google Sheets
description: Tabele online pentru liste de membri, înscrieri, răspunsuri la sondaje și indicatorii proiectului.
tags: [date, gratuit]
cost: Gratuit cu un cont Google. Programul Google for Nonprofits oferă servicii suplimentare pentru ONG-uri; verificați eligibilitatea pentru Moldova.
platforme: Web, Android, iOS
limba_ro: Da
link: https://sheets.google.com
---

> [!abstract] Pe scurt
> Google Sheets (în română „Foi de calcul Google”) este un tabel de tip Excel care stă online. Îl pot completa mai mulți membri deodată, iar răspunsurile din Google Forms ajung aici singure. Pentru o asociație, este „caietul de evidență” care nu se pierde și nu se udă.

## La ce îi folosește unei asociații
- Lista membrilor și a voluntarilor, cu telefon, sat și disponibilitate.
- Răspunsurile la un formular de înscriere sau la un sondaj, numărate automat.
- Planul de activități al proiectului, cu responsabil, termen și stare (făcut / în lucru).
- Tabelul de indicatori din cadrul logic, completat după fiecare activitate, gata pentru raport.
- Un grafic simplu (câte persoane pe sat, câți tineri și câți vârstnici) pentru raport sau pentru Facebook.

## Primii pași
1. Intrați pe [sheets.google.com](https://sheets.google.com) și creați o foaie nouă. Dați-i un nume clar, de exemplu „Voluntari curățenie primăvară”.
2. Pe primul rând scrieți titlurile coloanelor (Nume, Sat, Telefon, Vârsta, A participat). Un rând pentru fiecare persoană, o coloană pentru fiecare informație.
3. Înghețați primul rând (meniul „Afișează” sau „Vezi”, apoi „Îngheață”, „1 rând”), ca titlurile să rămână vizibile când derulați.
4. Selectați tabelul și apăsați „Date”, apoi „Creează un filtru”. Acum puteți vedea, de exemplu, doar voluntarii dintr-un singur sat.
5. Ca să numărați ceva, scrieți într-o celulă liberă o formulă de tipul `=COUNTIF(E:E;"Da")`, care numără câte persoane au „Da” în coloana E. Dacă formula dă eroare, înlocuiți punctul și virgula cu virgulă (depinde de setările regionale ale foii).
6. Pentru un rezumat pe categorii, folosiți „Inserează”, apoi „Tabel pivot”. Pentru o imagine, selectați datele și alegeți „Inserează”, apoi „Diagramă”.
7. Apăsați „Permite accesul” și dați drept de editare doar celor care completează tabelul.

## Tutoriale
- [Cum să folosești Foi de calcul Google](https://support.google.com/docs/answer/6000292?hl=ro): primii pași, în română.
- [Sortează și filtrează datele](https://support.google.com/docs/answer/3540681?hl=ro): filtre și sortare.
- [Creați și folosiți tabele pivot](https://support.google.com/docs/answer/1272900?hl=ro): rezumate pe categorii fără formule.
- [Tipuri de grafice și diagrame](https://support.google.com/docs/answer/190718?hl=ro): ce grafic alegeți pentru ce date.

## Atenție
> [!warning] Ce să aveți în vedere
> - Un tabel cu nume și telefoane conține date personale. Dați acces doar celor care chiar au nevoie și nu publicați linkul pe rețelele sociale.
> - Pentru datele despre copii, sănătate sau situația socială a unei familii, adunați doar strictul necesar și ștergeți ce nu mai folosiți.
> - Nu amestecați într-o coloană lucruri diferite (de exemplu „Sat” și „Telefon” în aceeași celulă). Mai târziu nu le veți mai putea număra.
> - Dacă cineva șterge din greșeală un rând, îl recuperați din istoricul versiunilor: apăsați „Ultima modificare” (pictograma cu ceas din dreapta sus) și restabiliți o versiune anterioară.

## Vezi și
- [[instrumente/google-forms|Google Forms]], [[instrumente/looker-studio|Data Studio]], [[instrumente/datawrapper|Datawrapper]], [[cum-sa-faci/sondaj-comunitate|Sondajul în comunitate]], [[cum-sa-faci/cadru-logic|Cadrul logic]]
