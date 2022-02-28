/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

const firstNum = parseInt(prompt('Insert first number'));
const secondNum = parseInt(prompt('Insert second number'));

if (firstNum < secondNum) {
    console.log(secondNum);
} else {
    console.log(firstNum);
}

// oppure :
// console.log(Math.max(firstNum, secondNum)); 