
const prompt = require('prompt-sync')();

function verificarGangorra(P1, C1, P2, C2) {
 
  if (
    P1 < 10 || C1 < 10 || P2 < 10 || C2 < 10 ||
    P1 > 100 || C1 > 100 || P2 > 100 || C2 > 100
  ) {
    console.log("Valores fora das restrições (10 ≤ P1,C1,P2,C2 ≤ 100)");
    process.exit();
  }

  var esquerda = P1 * C1;
  var direita = P2 * C2;

  if (esquerda === direita) return "Gangorra equilibrada";
  if (esquerda > direita) return "Gangorra desce para a esquerda";
  return "Gangorra desce para a direita";
}

var P1 = parseInt(prompt("Digite o peso da criança à esquerda (P1): "));
var C1 = parseInt(prompt("Digite o comprimento do lado esquerdo (C1): "));
var P2 = parseInt(prompt("Digite o peso da criança à direita (P2): "));
var C2 = parseInt(prompt("Digite o comprimento do lado direito (C2): "));

if (isNaN(P1) || isNaN(C1) || isNaN(P2) || isNaN(C2)) {
  console.log("Entrada inválida! Digite apenas números inteiros.");
  process.exit();
}

var resultado = verificarGangorra(P1, C1, P2, C2);
console.log(resultado);
