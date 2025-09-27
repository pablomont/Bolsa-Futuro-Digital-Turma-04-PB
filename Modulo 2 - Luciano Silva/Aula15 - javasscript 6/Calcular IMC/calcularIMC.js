// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Pergunta os dados do usuário
do {
    const peso = parseFloat(prompt("Informe seu peso (kg): "));
    if(isNaN(peso) || peso < 0{
    console.log("Peso inválido. Tente novamente.");
    }

} while(isNaN(peso) || peso < 0);

const altura = parseFloat(prompt("Informe sua altura (m): "));

// peso e altura são os parâmetros
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

let imc = calcularIMC(peso, altura);
S
// Mostra o resultado
console.log(`Seu IMC é ${imc.toFIxed(2)}`);