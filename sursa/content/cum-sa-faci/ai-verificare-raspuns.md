---
title: Cum verificați un răspuns primit de la AI
description: O metodă scurtă prin care deosebiți ce e sigur de ce e doar spus cu încredere într-un răspuns al unui asistent AI.
tags: [ai, cum-sa-faci]
durata: 15 minute
nivel: Începător
instrumente: [Perplexity, ChatGPT, Gemini]
---

> [!example] Situația
> Asociația vrea să organizeze în mai un târg de caritate în centrul satului, cu produse făcute de bunici, iar banii strânși merg la reparația terenului de sport. Președintele a întrebat un asistent AI ce acte trebuie și a primit un răspuns sigur pe el, cu numărul unei legi, un termen de depunere și numele unei autorizații. Înainte să meargă la primărie cu lista asta, asociația vrea să știe ce e adevărat.

## De ce aveți nevoie
- Răspunsul primit, copiat într-o notiță.
- Un al doilea instrument: alt asistent AI sau [[instrumente/perplexity|Perplexity]], care arată sursele.
- Site-urile oficiale: [gov.md](https://gov.md) pentru instituțiile statului, [legis.md](https://www.legis.md) pentru textul legilor, pagina primăriei.
- Un sfert de oră și, la final, un telefon la primărie.

## Pașii
1. Marcați în răspuns tot ce se poate verifica: cifre, date, termene, numere de legi, nume de instituții și de documente, citate.
2. Puneți aceeași întrebare din nou, într-o conversație nouă, apoi în alt asistent. Dacă răspunsurile diferă la un punct, acel punct e nesigur.
3. Cereți surse: „Pe ce vă bazați? Dați-mi documentul sau instituția pentru fiecare afirmație.” Dacă asistentul nu are o sursă clară, tratați afirmația ca pe o presupunere.
4. Deschideți fiecare sursă. Verificați că pagina există, că e din Republica Moldova (multe răspunsuri amestecă legislația din România) și că spune exact ce scrie în răspuns.
5. Căutați legea pe legis.md după număr și an și uitați-vă dacă e în vigoare. Un număr de lege inventat sau abrogat e o greșeală frecventă.
6. Nu întrebați „E corect, nu?”. Asistentul tinde să vă dea dreptate. Întrebați „Ce ar putea fi greșit sau depășit în acest răspuns?”.
7. Pentru tot ce ține de autorizații și termene locale, sunați sau mergeți la primărie. Instituția care dă actul e sursa finală.
8. Notați lângă fiecare afirmație „verificat” cu sursa, sau „nesigur”. Publicați sau folosiți doar ce e verificat.

> [!tip] Cu AI
> Folosiți asistentul ca să vă facă lista de verificat, fără să-i cereți să se verifice singur:
> ```text
> Mai jos e un răspuns pe care l-am primit de la un asistent AI. Nu-l rescrieți.
> Faceți un tabel cu toate afirmațiile care pot fi verificate (cifre, date, termene, legi, instituții, documente).
> Coloanele: afirmația, unde se poate verifica în Republica Moldova (ce instituție sau ce tip de document), cât de probabil e să fie greșită sau depășită și de ce.
>
> Răspunsul:
> [lipiți răspunsul]
> ```

## Verificați înainte să publicați
- [ ] Fiecare cifră, dată și termen are lângă el o sursă pe care ați deschis-o.
- [ ] Legile citate există, sunt din Republica Moldova și sunt în vigoare.
- [ ] Ce ține de o instituție locală a fost confirmat cu instituția.
- [ ] Ce a rămas nesigur fie a fost scos, fie e spus deschis („încă verificăm”).
- [ ] Textul final nu conține fraze copiate din răspunsul AI pe care nu le-ați verificat.

## Mergeți mai departe
- [[instrumente/perplexity|Perplexity]], pentru căutări cu sursele la vedere
- [[instrumente/notebooklm|Gemini Notebook]], când aveți deja documentul oficial
- [[cum-sa-faci/recunoaste-dezinformarea|Recunoașteți dezinformarea și imaginile false]]
- [[prompturi|Biblioteca de prompturi]], secțiunea Verificare
