/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

const firstNum = parseInt(prompt('Insert first number'));
const secondNum = parseInt(prompt('Insert second number'));
let result = document.getElementById('message');

if (firstNum < secondNum) {
    result.innerHTML = secondNum;
} else if (secondNum < firstNum) {
    result.innerHTML = firstNum;
} else if (isNaN(firstNum) || isNaN(secondNum)) {
    result.innerHTML = "Please insert a number."
} else {
    result.innerHTML = "The numbers inserted are equal."
}

// oppure :
// console.log(Math.max(firstNum, secondNum)); 