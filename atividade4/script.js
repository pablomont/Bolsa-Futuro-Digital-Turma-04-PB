const prompt = require(`prompt-sync`)();

let peso = prompt("Digite seu peso")
let altura =prompt("Digite sua altura")
let imc = peso / (altura * altura)
console.log("Resultado do imc: ", imc)

if(imc>25)
{
    console.log("Acima do peso")
} else {
    console.log("peso normal")
}