const prompt = require("prompt-sync") ()

function isPar(numero){
    if (numero % 2 == 0){ // se divisível por 2 e resto 0, o número é par.
        console.log("O número é par.")
    }
    else{
        console.log("O número é ímpar.")
    }
    return true
}

let numero = prompt("Digite um número para saber se ele é par ou não: ")
isPar(numero)