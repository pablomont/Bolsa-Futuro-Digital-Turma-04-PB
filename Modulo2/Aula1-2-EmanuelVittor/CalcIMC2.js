const prompt = require('prompt-sync')()

function IMC(peso, altura) {
    const IMC = peso / (altura ** 2)
    return IMC;
}

let peso, altura

console.log ("Olá!")
peso = prompt("Por favor, digite seu peso: ")
peso = parseFloat(peso)
altura = prompt("Por favor, digite sua altura: ")
altura = parseFloat(altura)

var imc = IMC(peso, altura)

if (imc > 25) {
    console.log ("Seu IMC está acima do normal.")
}
else {
    console.log ("Imc normal.")
}

