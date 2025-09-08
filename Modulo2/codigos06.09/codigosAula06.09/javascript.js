const prompt = require('prompt-sync')();


console.log("Calculando IMC");

peso = parseFloat(prompt("Digite o peso:"));
altura = parseFloat(prompt("Digite sua altura:"));

let imc = peso / (altura * peso);

console.log("Seu IMC é: ");

if(imc > 25){
    console("IMC ACIMA DO NORMAL\n");
}
else{
    console.log("IMC NORMAL");
}