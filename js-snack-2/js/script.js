/**
 * 
    L'utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
 */

// First option using console.log() 

// const firstString = prompt('Insert a word');
// const secondString = prompt('Insert another word');

// if (firstString.length < secondString.length) {
//     console.log(firstString);
//     console.log(secondString);
// } else if (firstString.length == secondString.length){
//     console.log("Words are equally long.");
// }

// Second option using input and event listener 
document.getElementById('enter').addEventListener('click',
    function() {
        const inputFirstWord = document.querySelector('.first-word').value;
        const inputSecondWord = document.querySelector('.second-word').value;

        const result = document.getElementById('result');

        if (inputFirstWord.length < inputSecondWord.length) {
            console.log("Shorter word is: " + inputFirstWord);
            result.innerHTML = "Shorter word is: " + inputFirstWord;
            result.innerHTML += "<br> Longer word is: " + inputSecondWord; 
        } else if (inputFirstWord.length === inputSecondWord.length){
            document.getElementById('result').innerHTML = "Words are equally long.";
        } else {
            result.innerHTML = "Shorter word is: " + inputSecondWord; 
            result.innerHTML += "<br> Longer word is: " + inputFirstWord; 
        }
    }
);

// Click event for reset button
document.getElementById('reset').addEventListener('click', 
    function() {
        document.querySelector('.first-word').value = '';
        document.querySelector('.second-word').value = '';
        result.classList.add("invisible");
    });
    