const prompt = require('prompt-sync')();

function tipo(valor){
    return typeof valor;
}

console.log(tipo("s"));

process.exit();