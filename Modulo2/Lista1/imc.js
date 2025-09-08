const prompt = require('prompt-sync')();

var peso = prompt("Informe seu peso: ");
var altura = prompt("Informe sua altura: ");

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

var resultado = imc(peso, altura);

console.log(`Seu IMC é: ${resultado}`)

