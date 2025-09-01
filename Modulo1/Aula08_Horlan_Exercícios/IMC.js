
const prompt = require('prompt-sync')();

let entrada1 = prompt('Digite sua altura: ');
let altura = parseFloat(entrada1);

let entrada2 = prompt('Digite sua massa: ');
let massa = parseFloat(entrada2);

let imc = massa / (altura * altura);

console.log('\nO imc analisado é: ' + imc + "\n");

if(imc > 25){

    console.log("IMC acima do normal.");
}

else{

    console.log("IMC normal.");
}