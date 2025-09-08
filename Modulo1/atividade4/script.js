const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite o peso (kg): "));
let altura = parseFloat(prompt("Digite a altura (m): "));

let imc = peso / (altura * altura);

console.log("O IMC é:", imc.toFixed(2));

if (imc > 25) {
    console.log("IMC ACIMA DO NORMAL");
} else {
    console.log("IMC NORMAL");
}
