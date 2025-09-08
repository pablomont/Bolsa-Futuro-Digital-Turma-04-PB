const prompt = require('prompt-sync')();

let massaString = prompt("Insira a massa (em kg): ");
const massa = parseFloat(massaString);

const alturaString = prompt("Informe a sua altura (em metros): ");
const altura = parseFloat(alturaString.replace(",", "."));

function calcularImc(massa, altura) {
    return massa / (altura * altura);
}

const imc = calcularImc(massa, altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc > 25) {
    console.log("IMC ACIMA DO NORMAL");
} else {
    console.log("IMC NORMAL");
}
