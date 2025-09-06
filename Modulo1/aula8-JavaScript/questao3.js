const prompt = require("prompt-sync")();
let operando1, operando2, operador;
operando1 = parseFloat(prompt("Digite o primeiro número: "));
operando2 = parseFloat(prompt("Digite o segundo número: "));
operador = prompt("Digite a operação (+, -, *, ou /) ");

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
