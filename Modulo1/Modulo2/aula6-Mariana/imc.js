const prompt = require('prompt-sync')


do{
    peso = parseFloat(prompt("Informe seu peso (em kg):"));
    if(inNan(peso) || peso < 0){
        console.log("Entrada inválida")
    }
} while(inNan(peso) || peso < 0)

    altura = parseFloat(promt("informe sua altura (em metros):"));