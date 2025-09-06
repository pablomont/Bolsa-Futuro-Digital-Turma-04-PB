const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite outro número: "));

let operacao = prompt("Escolha a operação (+, -, *, /): ");
let resultado;

if (operacao === '+') {
    resultado = num1 + num2;
    console.log("O resultado da soma é:", resultado);
} else if (operacao === '-') {
    resultado = num1 - num2;
    console.log("O resultado da subtração é:", resultado);
} else if (operacao === '*') {
    resultado = num1 * num2;
    console.log("O resultado da multiplicação é:", resultado);
} else if (operacao === '/') {
    if (num2 === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
    }
    resultado = num1 / num2;
    console.log("O resultado da divisão é:", resultado);
} else {
    console.log("Operação inválida.");
}