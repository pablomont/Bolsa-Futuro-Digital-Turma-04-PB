const prompt = require("prompt-sync")();

console.log("=== SISTEMA DE AVALIAÇÃO ===");
let mediaAprovacao = Number(prompt("Digite a média mínima para aprovação: "));
let mediaRecuperacao = Number(prompt("Digite a média mínima para recuperação: "));

function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function definirConceito(media) {
  if (media >= 9) return "A";
  else if (media >= 7) return "B";
  else if (media >= 5) return "C";
  else if (media >= 3) return "D";
  else return "F";
}


function exibirResultado(media, modo) {
  let situacao = "";
  if (media >= mediaAprovacao) {
    situacao = "APROVADO";
  } else if (media >= mediaRecuperacao) {
    situacao = "RECUPERAÇÃO";
  } else {
    situacao = "REPROVADO";
  }

  if (modo === 1) {
    console.log("Situação:", situacao);
  } else if (modo === 2) {
    console.log("Média:", media.toFixed(1), "- Situação:", situacao);
  } else if (modo === 3) {
    let conceito = definirConceito(media);
    console.log("Média:", media.toFixed(1), "- Conceito:", conceito);
  } else {
    console.log("❌ ERRO: Digite apenas 1, 2 ou 3.");
  }
}

function processarAluno(numero) {
  console.log(`\n=== ALUNO ${numero} ===`);
  let n1 = Number(prompt("Digite a primeira nota: "));
  let n2 = Number(prompt("Digite a segunda nota: "));

  console.log("\n=== MODO DE EXIBIÇÃO ===");
  console.log("1 - Simples");
  console.log("2 - Detalhado");
  console.log("3 - Conceito");
  let modo = Number(prompt("Escolha o modo de exibição (1, 2 ou 3): "));

  let media = calcularMedia(n1, n2);
  exibirResultado(media, modo);
}

for (let i = 1; i <= 3; i++) {
  processarAluno(i);
}
