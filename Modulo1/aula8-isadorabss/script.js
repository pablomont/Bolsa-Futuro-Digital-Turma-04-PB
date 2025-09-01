const prompt = require('prompt-sync')();

let peso = prompt("Digite seu peso (kg): ");
let pesoNum = parseFloat(peso);

let altura = prompt("Digite sua altura (m): ");
let alturaNum = parseFloat(altura);

let imc = (pesoNum/(alturaNum*alturaNum));
console.log("Seu IMC é:",imc);

if(imc > 25){
    console.log("\nImc acima do normal.");
} else {
    console.log("\nImc normal.");
}
process.exit();