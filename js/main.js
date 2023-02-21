'use strict'

// Creo una variabile lenghtNumber per il numero di chilometri da percorrere e le assegno il valore di prompt

const lenghtNumber = parseFloat(prompt('Inserire il numero di kilometri che si vuole percorrere'));

// Creo una variabile ageNumber per l'età del passeggero e le assegno il valore di prompt

const ageNumber = parseInt(prompt('Inserire la propria età in numero'));

// Creo una variabile let ticketPrice il cui valore sarà il calcolo del prezzo in base alla distanza e al prezzo per km

let ticketPrice = lenghtNumber * 0.21;

// SE ageNumber è inferiore a 18, si applicherà uno sconto del 20% a ticketPrice

//     ALTRIMENTI SE agenumber è maggiore o uguale a 65, si applicherà uno sconto del 40% a ticketPrice

if (ageNumber < 18) {
    ticketPrice = ticketPrice * 0.8;
}

else if (ageNumber >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * 0.2);
}

// Chiedo al programma di mostrare in console il prezzo finale (ticketPrice) con due cifre decimali (usando .toFixed(2))

console.log('Prezzo del biglietto: ', ticketPrice.toFixed(2),'€');