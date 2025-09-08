const prompt = require('prompt-sync');

// Lê e valida número
function lerNumero(msg) {
    const entrada = prompt(msg);
    const n = parseFloat(entrada);

    if (isNaN(n)) {
        console.log(`Erro: ${entrada} não é um número válido!`);
        process.exit(1);
    }

    return n;
}

const n1 = lerNumero("Digite o primeiro número: ");
const n2 = lerNumero("Digite o segundo número: ");
const op = prompt("Digite a operação (+, -, *, ou /): ");

if (op === "/" && n2 === 0) {
    console.log("Erro: Não é possível dividir por zero.");
    process.exit(1);
}

let resultado;

switch (op) {

    case "+":
        resultado = n1 + n2;
        console.log(`O resultado da soma é: ${resultado}`);
        break;

    case "-":
        resultado = n1 - n2;
        console.log(`O resultado da subtração é: ${resultado}`);
        break;

    case "*":
        resultado = n1 * n2;
        console.log(`O resultado da multiplicação é: ${resultado}`);
        break;

    case "/":
        resultado = n1 / n2;
        console.log(`O resultado da divisão é: ${resultado}`);
        break;

    default:
        console.log("Operação inválida. Por favor, use +, -, * ou /");
}
