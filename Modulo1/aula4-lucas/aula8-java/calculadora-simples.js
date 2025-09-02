// Solicita os números
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

// Solicita a operação
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;

switch (operacao) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {cd
      resultado = "Erro: divisão por zero!";
    }
    break;
  default:
    resultado = "Operação inválida!";
}

// Exibe o resultado
alert("Resultado: " + resultado);
