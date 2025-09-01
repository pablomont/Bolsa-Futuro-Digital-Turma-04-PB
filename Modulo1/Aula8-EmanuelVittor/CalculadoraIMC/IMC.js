const prompt = require('prompt-sync')()

let peso, altura, imc

console.log ("Olá!")
peso = prompt("Por favor, digite sua altura:")
peso = parseFloat(peso)
altura = prompt("Por favor, digite seu peso:")
altura = parseFloat(altura)

imc = peso / (altura * altura)

if (imc > 25) {
    console.log ("Seu IMC está acima do normal.")
}
else {
    console.log ("Imc normal."+ imc)
}