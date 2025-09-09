const prompt = require('prompt-sync')();

function ehPar(numero) {
  return numero % 2 === 0;
}

var entrada = prompt("Digite um número: ");
var numero = parseInt(entrada);

if (isNaN(numero)) {
  console.log("Valor inválido!");
  process.exit();
}

if (ehPar(numero)) {
  console.log(`O número ${numero} é PAR.`);
} else {
  console.log(`O número ${numero} é ÍMPAR.`);
}
