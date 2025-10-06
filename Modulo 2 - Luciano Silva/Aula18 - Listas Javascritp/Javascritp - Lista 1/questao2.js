// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Verficação:
function isTruthy(valor) {
  if (valor) {
    console.log(`${valor} é Truthy`);
  } else {
    console.log(`${valor} é Falsy`);
  }
}

// Teste alterando o valor:
let valor = "olá"; 

isTruthy(valor);