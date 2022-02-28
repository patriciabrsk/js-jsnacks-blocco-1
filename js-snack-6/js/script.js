/**
 *
  Chiedi un numero di 7 cifre all'utente
  e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

let sum = 0;
const userInput = prompt('Insert a 7 digit number');

for (i = 0; i < userInput.length; i++) {
  let number = parseInt(userInput[i]) 
  sum += number;
}

console.log(sum);