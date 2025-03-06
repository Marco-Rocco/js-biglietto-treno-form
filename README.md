# biglietto-treno-form

## Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

### MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

### MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

---


## Soluzione milestone 1:

- inseriamo tutto ciò che ci serve nel file html
    - creo due corpi input
        - uno per i km
        - uno per l'età
    - creo un tasto submit

- collego i tag al foglio js
    - tramite "getElementById", inserendo la classe assegnata ai tag posso manipolarne i contenuti dal foglio js

- invio i contenuti dell'input tramite il tasto submit
    - creo una funzione (inizialmente anonima) che mi permette di assimilare i valori inseriti dall'utente
        - per fare ciò avrò bisogno di ".value"

- calcolo gli sconti
    - tramite una condizione, definisco il tipo di sconto da applicare
        - SE l'utente è minorenne
            - sconto 20%
        - ALTRIMENTI SE l'utente è over 65
            - sconto 40%
        - ALTRIMENTI 
            - nessuno sconto

- stampo gli input dell'utent in console, con i dovuti messaggi

---

## Soluzione milestone 2:

- rappresento in pagina il messaggio finale del biglietto
    - in html, creo un div vuoto
    - inserisco il messaggio in questione nel div appena creato
        - assegno una variabile al div in js
        - la inserisco nella funzione
        - infondo alla funzione, utilizzo "innerHTML" per inserire il messaggio nel div

- privo il file della possibilità di ricaricarsi dopo ogni click sul bottone submit
    - assegnando event alla funzione e la proprietà "preventDefault", siccome ricaricare dopo ogni click è il comportamento di default