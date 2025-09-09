const prompt = require('prompt-sync')({ sigint: true });

function lerValor(mensagem) {
  const valor = parseInt(prompt(mensagem));
  if (isNaN(valor) || valor < 10 || valor > 100) {
    console.log("Restrições: todos os valores devem estar entre 10 e 100.");
    process.exit(1);
  }
  return valor;
}

function situacaoGangorra(p1, c1, p2, c2) {
  const ladoEsquerdo = p1 * c1;
  const ladoDireito = p2 * c2;

  if (ladoEsquerdo === ladoDireito) {
    return "Gangorra equilibrada";
  } else if (ladoEsquerdo > ladoDireito) {
    return "Gangorra desequilibrada para a esquerda";
  } else {
    return "Gangorra desequilibrada para a direita";
  }
}
//fazendo a validaçao
let p1 = lerValor("Informe o P1: ");
let c1 = lerValor("Informe o C1: ");
let p2 = lerValor("Informe o P2: ");
let c2 = lerValor("Informe o C2: ");

//chamando a funçao
console.log(situacaoGangorra(p1, c1, p2, c2));
