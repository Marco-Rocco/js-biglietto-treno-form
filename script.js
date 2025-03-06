const age = document.getElementById('age-input');
console.log(age);
console.log(age.value);

const km = document.getElementById('km-input');
console.log(km);
console.log(km.value);

const infoSub = document.getElementById('submit');
console.log(infoSub);

const totalDisplay = document.getElementById('total-display')


infoSub.addEventListener('click', function(event){
    event.preventDefault();

    if (isNaN(age.value) || isNaN(km.value) || age.value < 1 || age.value > 120) {
    alert("uno dei dati non è valido, refresha la pagina e inserisci dei dati validi");
    } else {

    console.log('click');
    
    console.log('età del viaggiatore= ' + age.value);
    console.log('kilometri da percorrere= ' + km.value);


    let tripProvValue = (km.value * 0.21 );
    console.log('il valore provvisorio del viaggio è: ' + '€' + tripProvValue.toFixed(2));

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

    totalDisplay.innerHTML= messageToUser};
});















// // creiamo un prompt per chiedere all'utente quanti chilometri percorrerà
// const domandaKm =  ("Ciao, quanti chilometri (km) percorrerà il tuo treno? ");
// console.log('km=' + domandaKm);

// // ora, assegnamo un valore ad ogni chilometro percorso, così da avere un valore del viaggio iniziale
// let valoreViaggio = (domandaKm * 0.21 );
// console.log('Il valore iniziale del viaggio è' + ' ' + '€' + (valoreViaggio.toFixed(2)));


// // creiamo un altro  prompt per chiedere l'età del viaggiatore
// const domandaEta = ("specifica la tua età in valore numerale, per favore");
// console.log("l'età del passeggero è" + ' ' + domandaEta + ' ' + "anni");

// // creiamo una condizione di esistente tra due fasce di età
// if (domandaEta < 18) {
//     alert ('prezzo finale del biglietto è' + ' ' + '€'+ ((valoreViaggio * 80 ) /100 ).toFixed(2));
// }
//  else if (domandaEta > 65) {
//     alert ('prezzo finale del biglietto è' + ' ' + '€'+ ((valoreViaggio * 60 ) /100 ).toFixed(2));
// }
// else {
//     alert ('prezzo finale del biglietto è' + ' ' + '€'+ valoreViaggio);
// }
