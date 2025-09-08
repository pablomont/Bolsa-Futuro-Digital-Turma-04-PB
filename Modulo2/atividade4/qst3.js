const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let op = prompt("Digite a operação (+, -, *, /): ");

let resultado;

if (op === "+") {
    resultado = n1 + n2;
    console.log(`O resultado da soma é: ${resultado}`);

} else if (op === "-") {
    resultado = n1 - n2;
    console.log(`O resultado da subtração é: ${resultado}`);

} else if (op === "*") {
    resultado = n1 * n2;
    console.log(`O resultado da multiplicação é: ${resultado}`);

} else if (op === "/") {
    resultado = n1 / n2;
    console.log(`O resultado da divisão é: ${resultado}`);

} else {
    console.log("Operação inválida. Por favor, use +, -, * ou /");
}
