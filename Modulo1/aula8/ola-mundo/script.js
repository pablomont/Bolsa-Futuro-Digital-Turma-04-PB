const prompt = require('prompt-sync')();

let peso = prompt("Informe seu peso: ");
let altura = prompt("Informe sua altura: ");
let imc = peso / (altura * altura);
console.log("O resultado do seu IMC é: ", imc);

if(imc>25)
{
    console.log("IMC acima do normal");
} else {
    console.log("IMC normal");
}