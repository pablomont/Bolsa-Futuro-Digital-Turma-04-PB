const prompt = require('prompt-sync')();

let peso = prompt("Digite seu peso (kg): ");
let pesoNum = parseFloat(peso);

let altura = prompt("Digite sua altura (m): ");
let alturaNum = parseFloat(altura);

let imc = (pesoNum/(alturaNum*alturaNum));
console.log(imc);

if(imc > 25){
    console.log("Imc acima do normal.");
} else {
    console.log("Imc normal.");
}
process.exit();