const age = document.getElementById('age-input');
console.log(age);
console.log(age.value);

const km = document.getElementById('km-input');
console.log(km);
console.log(km.value);

const infoSub = document.getElementById('submit');
console.log(infoSub);



infoSub.addEventListener('click', function(){

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
