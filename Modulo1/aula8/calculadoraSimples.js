const prompt = require('prompt-sync')();

let primeiroNumeroStr = prompt("Insira o primeiro número: ");
let segundoNumeroStr = prompt("Insira o segundo número: ");
let operacao = prompt("Digite a operação matemática  (+, -, *, /): ");

const primeiroNumero = parseFloat(primeiroNumeroStr.replace(",", "."));
const segundoNumero = parseFloat(segundoNumeroStr.replace(",", "."));

let resultado;

if (isNaN(primeiroNumero)) {
    console.log(`Erro: "${primeiroNumeroStr}" não é um número válido!`);
    process.exit(); 
}

if (isNaN(segundoNumero)) {
    console.log(`Erro: "${segundoNumeroStr}" não é um número válido!`);
    process.exit(); 
}


if (operacao === "+") {
    resultado = primeiroNumero + segundoNumero;
    console.log("Resultado da soma: " + resultado);
} else if (operacao === "-") {
    resultado = primeiroNumero - segundoNumero;
    console.log("Resultado da subtração: " + resultado);
} else if (operacao === "*") {
    resultado = primeiroNumero * segundoNumero;
    console.log("Resultado da multiplicação: " + resultado);
} else if (operacao === "/") {
    if (segundoNumero === 0) {
        console.log("Erro: Não é possível dividir por zero.");
    } else {
        resultado = primeiroNumero / segundoNumero;
        console.log("Resultado da divisão: " + resultado);
    }
} else {
    console.log("Operação inválida. Por favor, use +, -, * ou /.");
}
