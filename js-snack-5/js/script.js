/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */

const array = [];

for (let i = 0; i < 6; i++) {
   parseInt(prompt('Insert a number.'));
   if ((userNumber % 2) == 1) {
      array.push(userNumber);
   }
}
console.log(array);