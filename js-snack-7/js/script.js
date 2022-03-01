/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

const randomArray = [];

for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
}
console.log(randomArray);

let sum = 0;

for (let i = 0; i < randomArray.length; i++) {
    sum += randomArray[i];
}
console.log(sum);
console.log(sum / randomArray.length);