// OBS: instalar biblioteca com "npm install prompt-sync"
const prompt = require('prompt-sync')();

let peso; // precisa estar fora do loop para ser usado depois

// Loop para perguntar até o peso ser válido
do {
    peso = parseFloat(prompt("Informe seu peso (kg): "));
    if (isNaN(peso) || peso < 0) {
        console.log("Peso inválido. Tente novamente.");
    }
} while (isNaN(peso) || peso < 0);

// Pergunta altura (sem validação aqui, mas pode adicionar depois)
const altura = parseFloat(prompt("Informe sua altura (m): "));

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

const imc = calcularIMC(peso, altura);

// Exibe resultado com 2 casas decimais
console.log(`Seu IMC é ${imc.toFixed(2)}`);