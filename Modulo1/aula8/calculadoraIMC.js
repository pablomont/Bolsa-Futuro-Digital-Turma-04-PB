const prompt = require('prompt-sync')();
console.log("Calculadora Simples de IMC");

const massaString = prompt("Digite o seu peso em massa em kg (exemplo:100):");
const massa = parseFloat(massaString);

const alturaString = prompt("Informe a sua altura:");
const altura = parseFloat(alturaString);

const imc = massa/(altura*altura);

if (imc > 25){
    prompt("IMC ACIMA DO NORMAL")

} else {
    prompt("IMC NORMAL")
}
