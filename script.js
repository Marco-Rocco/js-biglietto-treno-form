//colleghiamo le parti di html a js con "getElemntById"

//age input
const age = document.getElementById('age-input');
console.log(age);
console.log(age.value);

//km input
const km = document.getElementById('km-input');
console.log(km);
console.log(km.value);

//submit button
const infoSub = document.getElementById('submit');
console.log(infoSub);

//ho creato un div vuoto per ospitare un messaggio in pagina per l'utente
const totalDisplay = document.getElementById('total-display')

//creo una funzione per inviare i dati inseriti dall'utente dopo aver cliccato submit
infoSub.addEventListener('click', function(event){
    event.preventDefault();

    //questa condizione non permette allo user di inviare dati non validi
    if (isNaN(age.value) || isNaN(km.value) || age.value < 1 || age.value > 120) {
    alert("uno dei dati non è valido, refresha la pagina e inserisci dei dati validi");
    } else {

    //stampo "cick" in concole per verificare il funzionamento del mio tasto submit
    console.log('click');
    
    // stampo in console il valore inserito dall'utente nell'input
    console.log('età del viaggiatore= ' + age.value);
    console.log('kilometri da percorrere= ' + km.value);

    // assegno un valore per kilometro
    let tripProvValue = (km.value * 0.21 );
    console.log('il valore provvisorio del viaggio è: ' + '€' + tripProvValue.toFixed(2));

    //creo delle variabili vuote, così da riempirle dopo in base alla condizione presentata
    let tripTotalValue = ''
    let tripDiscount = ''
    let messageToUser = ''

    if (age.value < 18) {
            tripTotalValue = (((tripProvValue * 80 ) /100 ).toFixed(2));
            console.log(`il valore finale del viaggio è €${tripTotalValue}`);

            tripDiscount = (((tripProvValue * 20 ) /100 ).toFixed(2));
            console.log(`il valore risparmiato è €${tripDiscount}`);

            messageToUser = (`il prezzo totale del viaggio è € ${tripTotalValue}, hai risparmiato € ${tripDiscount}`)

        }
         else if (age.value > 65) {
            tripTotalValue = (((tripProvValue * 60 ) /100 ).toFixed(2));
            console.log(`il valore finale del viaggio è €${tripTotalValue}`);

            tripDiscount = (((tripProvValue * 40 ) /100 ).toFixed(2));
            console.log(`il valore risparmiato è €${tripDiscount}`);
            messageToUser = (`il prezzo totale del viaggio è € ${tripTotalValue}, hai risparmiato € ${tripDiscount}`)
        }
        else {
            tripTotalValue = tripProvValue;
            console.log(`il valore finale del viaggio è ${tripTotalValue}`);

            messageToUser = (`il prezzo totale del viaggio è € ${tripTotalValue}`)


        }

    //inserisco il contenuto di "messageToUser" nel div che ho creato precedentemente
    totalDisplay.innerHTML= messageToUser};
});

