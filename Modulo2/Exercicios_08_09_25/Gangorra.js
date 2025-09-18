const prompt = require('prompt-sync')();

function verificarEstadoGangorra(P1, C1, P2, C2) {
  const MIN_VALUE = 10;
  const MAX_VALUE = 100;

  P1 = parseInt(P1, 10);
  C1 = parseInt(C1, 10);
  P2 = parseInt(P2, 10);
  C2 = parseInt(C2, 10);

  if (P1 < MIN_VALUE || P1 > MAX_VALUE ||
      C1 < MIN_VALUE || C1 > MAX_VALUE ||
      P2 < MIN_VALUE || P2 > MAX_VALUE ||
      C2 < MIN_VALUE || C2 > MAX_VALUE) {

    return `Erro: Todos os valores (P1, C1, P2, C2) devem estar entre ${MIN_VALUE} e ${MAX_VALUE}, inclusive.`;
  }

  const torqueEsquerdo = P1 * C1;
  const torqueDireito = P2 * C2;

  if (torqueEsquerdo === torqueDireito) {
    return "Cenário 1 (Gangorra equilibrada)";
  } else if (torqueEsquerdo > torqueDireito) {
    return "Cenário 2 (Lado esquerdo desce)";
  } else {
    return "Cenário 3 (Lado direito desce)";
  }
}

const P1 = prompt('Informe P1: ');
const C1 = prompt('Informe C1: ');
const P2 = prompt('Informe P2: ');
const C2 = prompt('Informe C2: ');

console.log(verificarEstadoGangorra(P1, C1, P2, C2));