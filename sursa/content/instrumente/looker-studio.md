---
title: Data Studio (fostul Looker Studio)
description: Un panou online cu cifrele principale ale asociației, care se actualizează singur din tabelul Google Sheets.
tags: [date, gratuit]
cost: Gratuit (există și o versiune plătită pentru companii, de care o asociație mică nu are nevoie).
platforme: Web
limba_ro: Parțial
link: https://datastudio.google.com
---

> [!abstract] Pe scurt
> Data Studio este instrumentul Google pentru rapoarte și panouri de date (în engleză „dashboard”). Până recent s-a numit Looker Studio și, înainte de asta, tot Data Studio, așa că veți găsi tutoriale cu ambele nume. Îl legați de un tabel Google Sheets și construiți o pagină cu cifre și grafice care se actualizează când se schimbă tabelul. Merită când aveți date care se adună constant, de exemplu înscrieri pe parcursul unui proiect de un an.

## La ce îi folosește unei asociații
- Un panou al proiectului, cu numărul de participanți pe lună, pe sat și pe gen, pe care îl trimiteți finanțatorului ca link.
- Urmărirea indicatorilor din cadrul logic fără să refaceți graficele la fiecare raport.
- O pagină pentru adunarea generală, cu activitățile anului în cifre.
- Rezultatele unui sondaj lung, filtrabile după sat sau vârstă.

## Primii pași
1. Pregătiți datele în [[instrumente/google-sheets|Google Sheets]]: primul rând cu titlurile coloanelor, un rând pentru fiecare înregistrare, fără celule îmbinate.
2. Intrați pe [datastudio.google.com](https://datastudio.google.com) cu același cont Google și creați un raport gol.
3. Când vi se cere sursa de date, alegeți conectorul Google Sheets, apoi foaia și fila cu datele voastre.
4. Adăugați un „scorecard” (o casetă cu o singură cifră, de exemplu totalul participanților), apoi un grafic cu bare pe sate.
5. Adăugați un filtru (de exemplu pe lună), ca cine citește să poată alege perioada.
6. Dați raportului un titlu clar și distribuiți-l ca link, cu drept de vizualizare.

## Tutoriale
- [Documentația Data Studio](https://docs.cloud.google.com/data-studio): ghidul oficial (în engleză), cu pași pentru conectarea datelor și construirea rapoartelor.
- [Prezentarea Data Studio](https://datastudio.google.com/overview): galerie de exemple și tipurile de vizualizări disponibile.

## Atenție
> [!warning] Ce să aveți în vedere
> - Pentru un singur grafic, într-un singur raport, nu aveți nevoie de Data Studio. Un grafic din Google Sheets sau din [[instrumente/datawrapper|Datawrapper]] e mai rapid.
> - Cine are linkul la raport vede tot ce ați pus în el. Nu afișați nume, telefoane sau alte date personale; arătați doar totaluri.
> - Dacă schimbați numele coloanelor în tabel după ce ați făcut raportul, graficele se pot strica. Stabiliți coloanele de la început.
> - Documentația oficială este în engleză. Rezervați-vă o oră liniștită pentru primul raport.

## Vezi și
- [[instrumente/google-sheets|Google Sheets]], [[instrumente/datawrapper|Datawrapper]], [[cum-sa-faci/raport-activitate|Raportul de activitate]], [[nevoi/date|Date și feedback]]
