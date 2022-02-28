/**
 * 
  Il software deve chiedere per 10 volte all'utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
 */

let sum = 0;

for (i = 0; i < 10; i++) {
  const number = parseInt(prompt('Insert a number'));
  sum += number;
} 

console.log('The sum of your numbers is ', sum);