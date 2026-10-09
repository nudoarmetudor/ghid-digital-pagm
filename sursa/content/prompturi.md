---
title: Bibliotecă de prompturi
description: Instrucțiuni gata de copiat pentru asistenții AI, grupate pe nevoile unei asociații, plus cum scrieți voi un prompt bun.
tags: [ai, prompturi]
culoare: mov
---

Un **prompt** este instrucțiunea scrisă pe care o dați unui asistent AI, cum ar fi [[instrumente/chatgpt|ChatGPT]], [[instrumente/gemini|Gemini]] sau [[instrumente/claude|Claude]]. Prompturile de mai jos sunt puncte de plecare. Copiați-le cu butonul din colțul blocului, înlocuiți tot ce e între paranteze pătrate `[ ]` cu informațiile voastre și apoi continuați conversația până textul sună a asociația voastră.

> [!warning] Înainte să lipiți ceva într-un asistent AI
> - Nu introduceți nume, telefoane, adrese sau situații personale ale beneficiarilor. Scrieți „o familie cu trei copii” în loc de numele familiei.
> - Ce primiți e o ciornă. Verificați cifrele, datele, numele și legile, apoi citiți textul cu voce tare înainte să-l publicați. Detalii în [[cum-sa-faci/ai-verificare-raspuns|Cum verificați un răspuns primit de la AI]].

## Cum scrieți un prompt bun

Un prompt bun răspunde la cinci întrebări. Nu trebuie să fie lung, trebuie să fie clar.

1. **Rol**: cine să fie asistentul. „Acționați ca responsabilul de comunicare al unei asociații de tineret dintr-un sat.”
2. **Context**: ce știe el despre voi și despre situație. Cine sunteți, pentru cine scrieți, ce s-a întâmplat, ce ton aveți de obicei.
3. **Sarcină**: ce anume să facă, cu un verb clar. „Scrieți”, „rezumați”, „propuneți cinci idei”, „găsiți greșelile”.
4. **Format**: cum arată rezultatul. Lungimea, lista sau tabelul, câte variante, dacă vreți emoji sau nu, în ce limbă.
5. **Verificare**: cereți-i să spună ce nu știe. „Dacă vă lipsește o informație, întrebați-mă înainte să scrieți. Marcați cu [DE VERIFICAT] orice cifră sau dată pe care nu v-am dat-o eu.”

Un exemplu care le pune pe toate cinci la un loc:

```text
Acționați ca responsabilul de comunicare al asociației [numele asociației] din [localitatea].
Context: organizăm [activitatea] pe [data], la [locul]. Publicul nostru sunt [cine citește: părinți, tineri, vârstnici]. Scriem simplu și cald, fără cuvinte mari.
Sarcina: scrieți textul unei postări de Facebook care anunță activitatea și îi invită pe oameni să vină.
Format: maximum 80 de cuvinte, o frază de început care atrage atenția, apoi ce, când, unde și cum se înscriu. Cel mult două emoji. Dați-mi două variante.
Verificare: nu adăugați detalii pe care nu vi le-am dat. Dacă lipsește ceva important, întrebați-mă.
```

> [!tip] Când răspunsul nu vă place
> Nu o luați de la capăt, continuați conversația: „mai scurt”, „mai puțin oficial”, „fără superlative”, „scrieți ca pentru bunica mea”. Asistentul tinde să vă dea dreptate, deci în loc de „E bun textul?” întrebați „Ce e slab în textul ăsta și cum l-ați îmbunătăți?”. Iar dacă puneți aceeași întrebare de două ori, puteți primi răspunsuri diferite, așa că alegeți varianta cea mai bună și verificați-o.

## Vizibilitate

**Anunțul unui eveniment**

```text
Acționați ca responsabilul de comunicare al unei asociații obștești dintr-un sat din Republica Moldova.
Scrieți o postare de Facebook care anunță [evenimentul] organizat de [numele asociației].
Detalii: [data și ora], [locul], [ce se întâmplă acolo], [ce trebuie să aducă oamenii], [cum se înscriu sau pe cine sună].
Publicul: [cine vrem să vină].
Ton: cald, simplu, ca între vecini. Maximum 100 de cuvinte, cel mult trei emoji, fără superlative.
Dați-mi trei variante cu începuturi diferite. Nu inventați detalii pe care nu vi le-am dat.
```

**Postarea de după eveniment**

```text
Am organizat [evenimentul] pe [data] în [localitatea]. Ce s-a întâmplat: [3-4 fapte, de exemplu ce s-a făcut, cine a ajutat, ce urmează].
Vrem să le mulțumim [partenerilor, voluntarilor, primăriei] și să arătăm rezultatul.
Scrieți o postare de maximum 120 de cuvinte, la persoana I plural („am făcut”, „vă mulțumim”), caldă, fără exagerări.
La final, adăugați o frază despre următoarea activitate: [activitatea următoare și data].
Nu adăugați cifre sau nume pe care nu vi le-am dat.
```

**Calendarul de postări pe o lună**

```text
Suntem [numele asociației], ne ocupăm de [domeniul: tineri, vârstnici, mediu, cultură] în [localitatea].
În luna [luna] avem: [lista activităților cu date].
Propuneți un calendar de postări pentru Facebook pentru această lună, câte [2 sau 3] pe săptămână.
Format: tabel cu coloanele Data, Tipul postării (anunț, poză din culise, mulțumire, informație utilă), Ideea în o frază, Ce poză sau video ne trebuie.
Includeți și postări care nu sunt anunțuri: o poveste a unui voluntar, un sfat util, o întrebare pentru comunitate.
```

**Textul scurt pentru un afiș**

```text
Facem un afiș pentru [evenimentul] din [localitatea], pe [data], la [ora], la [locul].
Propuneți cinci titluri de maximum șase cuvinte, ușor de citit de la doi metri.
Apoi scrieți textul de sub titlu în maximum trei rânduri: ce, când, unde, contact [numărul sau pagina].
```

**Același mesaj pentru alt public**

```text
Mai jos e un text al asociației noastre. Rescrieți-l pentru [publicul nou: adolescenți / persoane în vârstă / un finanțator / primărie].
Păstrați toate faptele exact cum sunt. Schimbați doar tonul, lungimea și cuvintele.
Spuneți-mi pe scurt ce ați schimbat și de ce.

Textul:
[lipiți textul aici]
```

## Proiecte

**Arborele problemei**

```text
Acționați ca un facilitator care ajută o asociație locală să-și clarifice ideea de proiect.
Problema pe care o vedem în [localitatea]: [descrieți problema în 2-3 fraze, cu ce ați observat voi].
Construiți un arbore al problemei: problema centrală, 4-5 cauze (cu cauzele lor, unde are sens) și 4-5 efecte.
Prezentați-l ca listă cu niveluri.
La final, puneți-ne cinci întrebări la care ar trebui să răspundem cu date din comunitate ca să știm dacă arborele e corect.
```

**Obiectivele și activitățile unui proiect**

```text
Pregătim un proiect pentru [numele apelului sau finanțatorul]. Problema: [problema]. Grupul cu care lucrăm: [cine, descris la general].
Propuneți un obiectiv general și 2-3 obiective specifice, măsurabile și realiste pentru [durata proiectului] și pentru o echipă de [câți oameni lucrează efectiv].
Pentru fiecare obiectiv specific, propuneți 2-3 activități și un indicator simplu prin care vedem dacă l-am atins.
Format: tabel. Nu inventați cifre despre comunitate, lăsați [cifra] acolo unde trebuie o dată reală.
```

**Ideea noastră se potrivește cu apelul?**

```text
Mai jos sunt criteriile unui apel de finanțare și ideea noastră de proiect.
Comparați-le punct cu punct, în tabel: criteriul, ce scrie în ideea noastră, se potrivește (da / parțial / nu), ce ar trebui să adăugăm.
La final, spuneți sincer care sunt cele mai slabe trei puncte ale ideii față de acest apel.
Folosiți doar ce scrie în textele de mai jos.

Criteriile apelului:
[lipiți criteriile]

Ideea noastră:
[lipiți ideea]
```

**Scrisoarea către un partener**

```text
Scrieți un e-mail scurt și politicos către [instituția: primăria, școala, biblioteca] din [localitatea], din partea asociației [numele].
Le propunem să fie partener în proiectul [numele sau ideea pe scurt]. Ce le cerem: [de exemplu sala, o scrisoare de susținere, un reprezentant în echipă]. Ce câștigă ei: [beneficiul pentru ei sau pentru comunitate].
Maximum 150 de cuvinte, ton respectuos, fără formule pompoase. Încheiați cu o propunere concretă de întâlnire: [data sau intervalul].
```

## Date

**Întrebările unui sondaj**

```text
Vrem să aflăm de la oamenii din [localitatea] [ce vrem să aflăm, de exemplu ce activități și-ar dori pentru tineri].
Propuneți 8-10 întrebări pentru un formular online, care se completează de pe telefon în cel mult 5 minute.
Amestecați întrebări cu variante de răspuns și 1-2 întrebări deschise. Formulați neutru, fără să sugerați răspunsul.
Nu cereți nume, adresă sau alte date care identifică persoana.
La final, spuneți-mi care întrebare ar putea fi înțeleasă greșit și de ce.
```

**Răspunsurile deschise, grupate pe teme**

```text
Mai jos sunt răspunsuri anonime la întrebarea „[întrebarea]”. Le-am curățat de nume și de alte date personale.
Grupați-le pe 4-6 teme. Pentru fiecare temă: un titlu scurt, câte răspunsuri intră acolo și un exemplu citat exact din listă.
Nu interpretați dincolo de ce scrie în răspunsuri. Dacă un răspuns nu intră nicăieri, puneți-l la „Altele”.

Răspunsurile:
[lipiți răspunsurile, câte unul pe rând]
```

**O formulă în Google Sheets**

```text
Lucrez în Google Sheets, cu interfața în [limba]. În coloana [A] am [ce e acolo], în coloana [B] am [ce e acolo], de pe rândul 2 până la rândul [ultimul rând].
Vreau să [ce vreți să calculați, de exemplu să număr câți participanți au venit din fiecare sat].
Scrieți formula, explicați-o pas cu pas în cuvinte simple și spuneți-mi în ce celulă s-o pun.
```

**Un tabel explicat pe înțelesul tuturor**

```text
Mai jos e un tabel cu [ce date conține]. Explicați în 5 fraze simple ce arată, pentru membrii asociației care nu lucrează cu cifre.
Spuneți care sunt cele mai importante două observații și ce nu putem concluziona din aceste date.
Nu adăugați cifre care nu sunt în tabel.

[lipiți tabelul]
```

## Organizare

**Ordinea de zi a ședinței**

```text
Asociația noastră are ședință pe [data], [durata] minute, cu [cine participă]. Subiectele: [lista subiectelor].
Propuneți o ordine de zi cu timp alocat pentru fiecare punct și cu decizia pe care trebuie s-o luăm la fiecare.
Puneți subiectele care cer decizii la început, când oamenii sunt odihniți.
```

**Procesul-verbal din notițe**

```text
Mai jos sunt notițele mele de la ședința asociației din [data]. Transformați-le într-un proces-verbal scurt, cu: participanți (doar funcțiile, fără nume), subiecte discutate, decizii luate, sarcini (ce, cine, până când).
Nu adăugați decizii sau sarcini care nu apar în notițe. Unde notițele nu sunt clare, scrieți [NECLAR].

Notițele:
[lipiți notițele]
```

**Planul pe săptămâni până la eveniment**

```text
Organizăm [evenimentul] pe [data]. Avem [câte] săptămâni și [câți] voluntari activi, fiecare cu câteva ore pe săptămână.
Ce trebuie făcut: [lista mare, în orice ordine].
Împărțiți totul pe săptămâni, în ordinea în care trebuie făcut, ca listă de sarcini. Marcați ce sarcini depind de altele și ce trebuie confirmat cu primăria sau cu partenerii.
```

**Mesajul către voluntari**

```text
Scrieți un mesaj pentru grupul de voluntari al asociației, pe Viber.
Ce vrem: [de exemplu ajutor la montarea scenei sâmbătă dimineață]. Detalii: [ora, locul, ce să aducă, cu cine să vorbească].
Ton prietenos, scurt, maximum 60 de cuvinte. Încheiați cu o întrebare la care se răspunde ușor, de tipul „Cine poate veni?”.
```

## Verificare

**Ce trebuie verificat într-un text**

```text
Mai jos e un text pe care vrem să-l publicăm. Nu-l rescrieți.
Faceți o listă cu toate afirmațiile care pot fi verificate: cifre, date, nume, legi, instituții, citate.
Pentru fiecare, spuneți unde le-am putea verifica (ce tip de sursă oficială) și cât de sigur sunteți că sunt corecte.

Textul:
[lipiți textul]
```

**Argumentele contra**

```text
Avem următoarea idee / decizie: [descrieți ideea].
Acționați ca un membru sceptic al consiliului asociației. Dați-mi cele mai puternice cinci argumente împotriva ei și ce ar putea merge prost.
Nu mă încurajați și nu încheiați cu o concluzie optimistă. Vreau doar riscurile, clar spuse.
```

**Sursele unui răspuns**

```text
Pentru răspunsul de mai sus, spuneți-mi pe ce vă bazați.
Pentru fiecare afirmație importantă, dați o sursă pe care o pot deschide eu: numele documentului sau al instituției și, dacă îl știți, linkul.
Dacă nu aveți o sursă sigură pentru o afirmație, spuneți asta direct în loc să ghiciți.
```

> [!note] Sursele se verifică și ele
> Un asistent AI poate da linkuri care nu există sau care spun altceva. Deschideți fiecare sursă și căutați în ea afirmația. Pentru căutări cu surse afișate e mai potrivit [[instrumente/perplexity|Perplexity]], iar pentru un document pe care îl aveți deja, [[instrumente/notebooklm|Gemini Notebook]].

**Ortografie și diacritice**

```text
Corectați textul de mai jos: greșeli de ortografie, punctuație și diacritice (ș și ț cu virgulă dedesubt).
Nu schimbați stilul și nici cuvintele care sunt corecte. Arătați-mi la final lista cu ce ați corectat.

[lipiți textul]
```

**Un mesaj suspect**

```text
Asociația a primit mesajul de mai jos. Am șters din el numele și datele noastre.
Spuneți-mi ce semne de înșelătorie sau de manipulare vedeți (urgență, amenințări, linkuri ciudate, cereri de parole sau de coduri) și ce ar trebui să verificăm înainte să facem ceva.
Nu deschideți și nu urmați linkurile din mesaj.

Mesajul:
[lipiți mesajul, fără date personale]
```

## Vezi și
- [[nevoi/ai|AI în munca asociației]], [[cum-sa-faci/ai-text-postare|Textul unei postări scris cu ajutorul AI]], [[cum-sa-faci/ai-rezumat-document|Rezumatul unui document lung]], [[cum-sa-faci/ai-verificare-raspuns|Cum verificați un răspuns primit de la AI]]
