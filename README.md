Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca!


ESERCIZIO


Creo una variabile lenghtNumber per il numero di chilometri da percorrere e le assegno il valore di prompt

Creo una variabile ageNumber per l'età del passeggero e le assegno il valore di prompt

Creo una variabile let ticketPrice il cui valore sarà il calcolo del prezzo in base alla distanza e al prezzo per km

SE ageNumber è inferiore a 18, si applicherà uno sconto del 20% a ticketPrice

    ALTRIMENTI SE agenumber è maggiore o uguale a 65, si applicherà uno sconto del 40% a ticketPrice

Chiedo al programma di mostrare in console il prezzo finale (ticketPrice) con due cifre decimali (usando .toFixed(2))