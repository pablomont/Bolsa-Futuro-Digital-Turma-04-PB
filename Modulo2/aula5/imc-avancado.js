const prompt = require('prompt-sync')();

let massa;
let altura;

do {
    const massaString = prompt('Informe seu peso (em kg): ');
    massa = parseFloat(massaString.replace(',', '.'));

    if (isNaN(massa) || massa <= 0) {
        console.log("Valor inválido. Por favor, digite um número positivo para o peso.");
    }
} while (isNaN(massa) || massa <= 0); 

do {
    const alturaString = prompt("Informe sua altura (em metros): ");
    altura = parseFloat(alturaString.replace(',', '.'));

    if (isNaN(altura) || altura <= 0) {
        console.log("Valor inválido. Por favor, digite um número positivo para a altura.");
    }
} while (isNaN(altura) || altura <= 0);

// 3. Função para calcular o IMC
function calcularImc(massa, altura) {
    return massa / (altura * altura);
}

const imc = calcularImc(massa, altura);
console.log("\nSeu IMC é: " + imc.toFixed(2));

if (imc > 25) {
    console.log("IMC ACIMA DO NORMAL");
} else {
    console.log("IMC NORMAL");
}