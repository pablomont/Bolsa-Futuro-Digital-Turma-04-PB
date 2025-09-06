const prompt = require('prompt-sync')();
let massa = parseFloat(prompt("Digite seu peso (em Kg): "))
let altura = parseFloat(prompt("Digite sua altura (em metros): "))
let imc = massa / (altura ** 2)
console.log("Seu IMC é: ", imc)
if (imc > 25) {
    console.log("IMC ACIMA DO NORMAL")
} else {
    console.log("IMC NORMAL")
}

massa = prompt()
massa = parseFloat(massa)