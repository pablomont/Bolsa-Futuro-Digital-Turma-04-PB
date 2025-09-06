const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite seu peso (kg): "));
let altura = parseFloat(prompt("Digite sua altura (m): "));

if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    console.log("Entrada inválida. Reinicie o programa.");
    process.exit();
}

let imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Classificação: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Classificação: Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
    console.log("Classificação: Obesidade grau I");
} else if (imc >= 35 && imc < 39.9) {
    console.log("Classificação: Obesidade grau II (severa)");
} else {
    console.log("Classificação: Obesidade grau III (mórbida)");
}