const prompt = require('prompt-sync')();
console.log("Calculadora Simples de IMC");

const massaString = prompt("Informe o seu peso (em kg):");
const massa = parseFloat(massaString);

const alturaString = prompt("Informe a sua altura (em metros):");
const altura = parseFloat(alturaString.replace(",", "."));

const imc = massa/(altura*altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc > 25){
    prompt("IMC ACIMA DO NORMAL")

    } else {
        prompt("IMC NORMAL")
        }
