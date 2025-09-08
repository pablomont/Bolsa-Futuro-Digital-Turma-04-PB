const prompt = require('prompt-sync')();

// Pergunta os dados do usuário
const peso = parseFloat(prompt("Informe seu peso (kg): "));
const altura = parseFloat(prompt("Informe sua altura (m): "));

// peso e altura são os parâmetros
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

let imc = calcularIMC(peso, altura);

// Mostra o resultado
console.log(`Seu IMC é ${imc}`);