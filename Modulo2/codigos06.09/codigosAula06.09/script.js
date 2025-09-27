const prompt = require('prompt-sync')();

console.log("Calculando IMC");

let peso = parseFloat(prompt("Digite o peso (kg): "));
do {
    if (isNaN(peso) || peso <= 0) {
        console.log("Peso inválido. Por favor, insira um valor numérico positivo.");
    }
    peso = parseFloat(prompt("Digite o peso (kg): "));
} while (isNaN(peso) || peso <= 0);

let altura = parseFloat(prompt("Digite sua altura (m): "));

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let resultado = calcularIMC(peso, altura);

console.log("Seu IMC é:", resultado);

if (resultado > 25) {
    console.log("IMC ACIMA DO NORMAL\n");
} else {
    console.log("IMC NORMAL");
}
