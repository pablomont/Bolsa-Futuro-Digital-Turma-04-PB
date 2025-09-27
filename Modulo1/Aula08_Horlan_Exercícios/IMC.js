
const prompt = require('prompt-sync')();

let altura = parseFloat(prompt('Digite sua altura: '));

if(isNaN(altura) || altura <= 0){
    console.log('Valor inválido.');
    process.exit();
}

let massa = parseFloat(prompt('Digite sua massa: '));

if(isNaN(massa) || massa <= 0){
    console.log('Valor inválido.');
    process.exit();
}

let imc = massa / (altura * altura);

console.log('\nO imc analisado é: ' + imc + "\n");

if(imc > 25){

    console.log("IMC acima do normal.");
}

else{

    console.log("IMC normal.");
}

