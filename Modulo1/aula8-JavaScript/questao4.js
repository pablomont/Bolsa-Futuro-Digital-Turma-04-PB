const prompt = require("prompt-sync")();
let operando1, operando2, operador;
operando1 = parseFloat(prompt("Digite o primeiro número: "));
operando2 = parseFloat(prompt("Digite o segundo número: "));
operador = prompt("Digite a operação (+, -, *, ou /) ");

if (isNaN(operando1)) { 
    console.log(`Erro: {a} não é um número valido!`);
} else if (isNaN(operando2)) {
    console.log(`Erro: {b} não é um número valido!`);
} else if (operando2 === 0) {
    console.log("Erro: Não é possível dividir por zero.");
} else {

    if (operador === "+") {
        console.log("O resultado da soma é ", operando1 + operando2);
    } else if (operador === "-") {
        console.log("O resultado da subtração é ", operando1 - operando2);
    } else if (operador === "*") {
        console.log("O resultado da multiplicação é ", operando1 * operando2);
    } else if (operador === "/") {
        console.log("O resultado da divisão é ", operando1 / operando2);
    } else {
        console.log("Operação inválida. Por favor, use +, -, *, ou /.");
    }
}
