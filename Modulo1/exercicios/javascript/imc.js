const prompt = require('prompt-sync')();

peso = parseFloat(prompt("Informe seu peso (em kg): "));
altura = parseFloat(prompt("Informe sua altura (em metros): "));

let imc = peso / (altura * altura);
console.log("Seu IMC é: "+imc);

if(imc > 25){
    console.log("IMC ACIMA DO NORMAL\n");
}
else{
    console.log("IMC NORMAL");
}