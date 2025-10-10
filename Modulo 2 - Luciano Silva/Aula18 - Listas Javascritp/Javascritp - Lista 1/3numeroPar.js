// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Verficação:
function par(num1) {
    if (num1 % 2 == 0) {
        console.log(`${num1} é par`);
    } else {
        console.log(`${num1} é ímpar`);
    }
}

// Teste alterando o valor:
let num1 = 10;

par(num1);