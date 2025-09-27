const prompt = require("prompt-sync")()

do{
    peso = parseFloat(prompt("Insira o seu peso (em KG):"));
    if(isNaN(peso) || peso < 0){
        console.log("Entrada invalida")
    }

} while(isNaN(peso) || peso < 0)
altura = parseFloat(prompt("Insira sua altura (em Metros): "))

let imc = peso / (altura * altura)
console.log("Seu peso é: " + imc);


