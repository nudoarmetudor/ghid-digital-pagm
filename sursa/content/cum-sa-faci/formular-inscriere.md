---
title: Un formular de înscriere în 15 minute
description: Cum faceți un formular de înscriere pe Google Forms, cu acordul părinților pentru minori și cu locuri limitate.
tags: [date, cum-sa-faci]
durata: 15 minute
nivel: Începător
instrumente: [Google Forms, Google Sheets]
---

> [!example] Situația
> Clubul de tineret al asociației organizează sâmbăta viitoare, la casa de cultură, un atelier de fotografie cu telefonul. Locurile sunt limitate, iar o parte dintre cei interesați au sub 18 ani. Până acum înscrierile se făceau pe Viber, în mesaje private, și de fiecare dată s-au pierdut nume, iar la ușă au venit mai mulți oameni decât încăpea sala.

## De ce aveți nevoie
- Un cont Google, ideal cel comun al asociației.
- Detaliile activității: data, ora, locul, pentru cine este, câte locuri sunt.
- Textul scurt despre date personale (cine vede datele, de ce le cereți, cât le păstrați).
- 15 minute și un telefon pe care să testați formularul.

## Pașii
1. Deschideți [[instrumente/google-forms|Google Forms]] la forms.google.com și apăsați „Formular nou”.
2. **Titlul și descrierea.** Titlu: „Înscriere: atelier de fotografie cu telefonul”. În descriere: data, ora, locul, ce trebuie să aducă participanții și o frază despre date: „Datele voastre le vede doar echipa asociației și le folosim doar pentru acest atelier.”
3. **Întrebările de bază**, toate obligatorii: Nume și prenume (răspuns scurt), Localitatea (variante multiple, cu satele din jur și opțiunea „Altele”), Telefon (răspuns scurt), Vârsta (variante multiple pe categorii: sub 14, 14-17, 18 și peste).
4. **O întrebare din drumul beneficiarului:** „De unde ați aflat de atelier?” (Facebook, Viber, școală, prieteni, afiș). Răspunsurile vă arată care canal funcționează, exact treapta de „aflare” din funnel-ul de la sesiune.
5. **Secțiunea pentru minori.** Adăugați o secțiune nouă („Acordul părintelui”), cu numele părintelui, telefonul lui și o casetă de bifat: „Sunt de acord ca fiul/fiica mea să participe”. Apoi, la întrebarea despre vârstă, apăsați „Mai multe” (cele trei puncte) și alegeți „Accesează secțiunea în funcție de răspuns”: cei sub 18 ani merg la secțiunea pentru părinți, ceilalți trec direct la final.
6. **Acordul pentru fotografii.** Adăugați o întrebare separată, cu „Da” și „Nu”: „Sunteți de acord să apăreți în fotografiile publicate de asociație?”. Respectați răspunsul și la publicare.
7. **Legați formularul de un tabel.** În fila „Răspunsuri”, apăsați „Mai multe” și „Selectează destinația pentru răspunsuri”, apoi creați o foaie de calcul nouă. Lista participanților se face singură în [[instrumente/google-sheets|Google Sheets]].
8. **Limitați locurile.** Apăsați „Publică”. După publicare, de la butonul „Publicat”, puteți seta o dată de închidere sau o limită de răspunsuri, ca formularul să se închidă singur când s-au ocupat locurile. Scrieți în mesajul de confirmare (în „Setări”, la „Prezentare”) ce urmează: „Vă sunăm cu o zi înainte ca să confirmăm.”
9. **Testați.** Copiați linkul pentru respondenți, completați formularul de pe telefon o dată ca adult și o dată ca minor, verificați că apar ambele în tabel, apoi ștergeți răspunsurile de test.
10. **Trimiteți linkul** pe grupurile de Viber, pe pagina de Facebook și pe un [[cum-sa-faci/afis-eveniment|afiș]] (pe afiș ajută și un cod QR făcut din link).

> [!tip] Cu AI
> Un asistent AI vă poate propune întrebările și textul despre date personale, pe care apoi le adaptați. Nu-i dați datele participanților.
> ```text
> Fac un formular de înscriere pe Google Forms pentru o activitate a unei
> asociații obștești din Republica Moldova.
> Activitatea: [ce, când, unde, pentru cine].
> Participanții pot avea și sub 18 ani.
>
> Propune-mi:
> 1. Maximum 8 întrebări, cu tipul fiecăreia (răspuns scurt, variante
>    multiple, casete de selectare) și care ar trebui să fie obligatorii.
> 2. Un text scurt și prietenos pentru descrierea formularului, care spune
>    cine vede datele, de ce le cerem și cât timp le păstrăm.
> 3. Textul pentru acordul părintelui și pentru acordul privind fotografiile.
> 4. Un mesaj de confirmare după trimitere.
> Scrie în română simplă și prietenoasă.
> ```

## Verificați înainte să publicați
- [ ] Titlul și descrierea spun clar ce, când și unde.
- [ ] Cereți doar datele de care chiar aveți nevoie.
- [ ] Minorii ajung la secțiunea cu acordul părintelui.
- [ ] Există o întrebare separată pentru acordul privind fotografiile.
- [ ] Răspunsurile ajung într-o foaie Google Sheets.
- [ ] Ați setat limita de răspunsuri sau data de închidere.
- [ ] Ați testat formularul pe telefon și ați șters răspunsurile de test.
- [ ] Formularul nu cere cont Google (fără limitare la un răspuns și fără încărcare de fișiere).

## Mergeți mai departe
- Același instrument, pentru întrebări despre nevoi: [[cum-sa-faci/sondaj-comunitate|un sondaj în comunitate]].
- Afișul pentru activitate: [[cum-sa-faci/afis-eveniment|un afiș pentru eveniment în 20 de minute]].
- După activitate, cifrele din formular intră în [[cum-sa-faci/raport-activitate|raportul de activitate]].
- Despre protejarea datelor asociației: [[nevoi/siguranta|Siguranță online]].
