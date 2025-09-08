const prompt = require('prompt-sync')();

function ehPar(valor){
    if (valor % 2 == 0){
        console.log(`${valor} é par`);
    }
    else{
        console.log(`${valor} é ímpar`);
    }
}

var valor = prompt("Digite um valor: ")
ehPar(valor)