const prompt = require('prompt-sync')();

var numeroStr = prompt("Insira o numero: ")
var numero = parseFloat(numeroStr.replace(",", "."));

function parOuNao(numero){
    if (numero % 2 == 0){
        console.log(`O numero ${numero} é par.`)
    } else {
        console.log(`O numero ${numero} não é par.`)
    }
}

parOuNao(numero);
