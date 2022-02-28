/**
 *
  Chiedi un numero di 7 cifre all'utente
  e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

// Click event for sum button
document.getElementById('sum').addEventListener('click',
  function() {

    let sum = 0;
    const userInput = document.querySelector('.number').value;

    for (i = 0; i < userInput.length; i++) {
      let number = parseInt(userInput[i]);
      sum += number;
    }
    document.querySelector('.digits-sum').innerHTML = sum;
  }
);