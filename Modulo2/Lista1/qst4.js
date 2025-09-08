const prompt = require('prompt-sync')();

function dataType(valor){
    return typeof(valor)
}

var valor = prompt("Digite um valor: ")
console.log("O tipo do valor é:", dataType(valor));