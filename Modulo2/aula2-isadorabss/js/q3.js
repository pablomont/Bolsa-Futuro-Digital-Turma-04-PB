const prompt = require('prompt-sync')();

function ehPar(valor){
    if (valor%2 === 0){
        return "É par"
    } else{
        return "Não é par"
    }
}

console.log(ehPar(3));

process.exit();