/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */

// Create empty array
const array = [];

for (let i = 0; i < 6; i++) {

   // Prompt user to insert a number
   const userNumber = parseInt(prompt('Insert a number.'));
   
   // Select h1 text in HTML
   const textArray = document.querySelector('.text-array');

   // When the number inserted is odd 
   if ((userNumber % 2) == 1) {
      array.push(userNumber); // add it to the array
      // Print out the array once we exit the loop
      textArray.innerHTML = array + " have been added to your array.";
   }
}
