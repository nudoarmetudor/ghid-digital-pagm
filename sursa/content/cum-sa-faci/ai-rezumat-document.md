---
title: Rezumatul unui document lung, cu trimiteri la text
description: Cum aflați în jumătate de oră ce cere un ghid de finanțare de zeci de pagini, cu fiecare răspuns legat de pagina din care vine.
tags: [ai, proiecte, cum-sa-faci]
durata: 30 de minute
nivel: Începător
instrumente: [Gemini Notebook, Claude]
---

> [!example] Situația
> A fost lansat un apel de granturi mici pentru inițiative locale, iar ghidul solicitantului e un PDF lung, cu anexe. Consiliul asociației se adună joi seara și trebuie să decidă dacă merită să aplice. Nimeni nu are timp să citească tot ghidul până atunci, dar toată lumea vrea să știe cine poate aplica, până când, pentru ce activități și ce acte trebuie strânse.

## De ce aveți nevoie
- Ghidul în format PDF sau linkul către pagina apelului.
- Un cont Google pentru [[instrumente/notebooklm|Gemini Notebook]] sau, ca alternativă, un cont [[instrumente/claude|Claude]].
- Lista întrebărilor la care consiliul vrea răspuns.
- Un document gol în care adunați răspunsurile pentru ședință.

## Pașii
1. Descărcați ghidul de pe site-ul oficial al finanțatorului, ca să lucrați pe varianta corectă și actuală.
2. Deschideți notebook.google.com, creați un caiet nou și numiți-l după apel.
3. Adăugați ghidul ca sursă. Dacă anexele sunt fișiere separate, adăugați-le și pe ele.
4. Cereți întâi un rezumat general cu promptul de mai jos.
5. Puneți apoi întrebările consiliului, câte una: eligibilitatea, termenul limită, activitățile eligibile, cheltuielile neeligibile, documentele cerute, criteriile de evaluare.
6. La fiecare răspuns, apăsați pe numărul de trimitere și citiți fragmentul din ghid. Mai ales la termen și la condițiile de eligibilitate.
7. Întrebați și ce nu e clar: „Ce condiții din ghid ar putea exclude o asociație mică, înființată acum doi ani, dintr-un sat?”
8. Copiați răspunsurile verificate în documentul pentru ședință, cu pagina din ghid lângă fiecare.
9. Lângă orice răspuns neclar, scrieți întrebarea pe care o trimiteți finanțatorului. Cele mai multe apeluri au o adresă de contact pentru întrebări.

> [!tip] Cu AI
> Promptul pentru rezumatul de la pasul 4:
> ```text
> Pe baza ghidului încărcat, faceți un rezumat pentru consiliul unei asociații obștești mici dintr-un sat din Republica Moldova.
> Structura: 1) cine poate aplica, 2) termenul limită și modul de depunere, 3) ce activități se finanțează, 4) ce nu se finanțează, 5) ce documente trebuie depuse, 6) cum se evaluează cererile.
> La fiecare punct, indicați pagina sau secțiunea din ghid.
> La final, scrieți separat orice condiție care ar putea fi o problemă pentru o asociație mică, fără personal angajat.
> Dacă o informație nu apare în ghid, scrieți „nu apare în ghid”.
> ```

## Verificați înainte să trimiteți rezumatul
- [ ] Termenul limită și ora de depunere sunt verificate în ghid, pe pagina indicată.
- [ ] Condițiile de eligibilitate sunt citite în original, cu tot cu excepții.
- [ ] Ghidul folosit e ultima versiune de pe site-ul finanțatorului.
- [ ] Ce nu apare în ghid e marcat ca întrebare pentru finanțator.
- [ ] În caiet nu ați încărcat documente cu date personale.

## Mergeți mai departe
- [[cum-sa-faci/cauta-finantare|Cum căutați finanțare]]
- [[cum-sa-faci/arborele-problemei|Arborele problemei]] și [[cum-sa-faci/cadru-logic|Cadrul logic]], dacă decideți să aplicați
- [[instrumente/funds-for-ngos|FundsforNGOs]] și [[instrumente/eu-funding-tenders|Portalul UE de finanțări]]
- [[nevoi/proiecte|Proiecte și finanțare]]
