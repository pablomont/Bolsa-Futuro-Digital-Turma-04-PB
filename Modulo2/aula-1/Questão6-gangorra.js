const prompt = require('prompt-sync')();

function lerValor(texto) {
  const valor = parseInt(prompt(texto));
  if (isNaN(valor) || valor < 1 || valor > 100) {
    console.log(`Valor ${valor} não suportado.`);
    process.exit();
  }
  return valor;
}

const P1 = lerValor('Informe o P1: ');
const C1 = lerValor('Informe o C1: ');
const P2 = lerValor('Informe o P2: ');
const C2 = lerValor('Informe o C2: ');

const ladoEsquerdo = P1 * C1;
const ladoDireito = P2 * C2;

if (ladoEsquerdo === ladoDireito) {
  console.log('Gangorra equilibrada');
} else if (ladoEsquerdo > ladoDireito) {
  console.log('Gangorra desequilibrada para a ESQUERDA');
} else {
  console.log('Gangorra desequilibrada para a DIREITA');
}
