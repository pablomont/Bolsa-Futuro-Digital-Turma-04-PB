const prompt = require("prompt-sync")();

function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function exibirResultado(media, modo) {
  let situacao;
if (media >= 7) {
  situacao = "APROVADO";
} else {
  situacao = "REPROVADO";
}

  if (modo === 1) {
    console.log("Situação:", situacao);
  } else if (modo === 2) {
    console.log("Média:", media.toFixed(1), "- Situação:", situacao);
  } else {
    console.log("❌ ERRO: Digite apenas 1 ou 2.");
  }
}

function processarAluno(numero) {
  console.log(`\n=== ALUNO ${numero} ===`);
  let n1 = Number(prompt("Digite a primeira nota: "));
  let n2 = Number(prompt("Digite a segunda nota: "));

  console.log("\n=== MODO DE EXIBIÇÃO ===");
  console.log("1 - Simples");
  console.log("2 - Detalhado");
  let modo = Number(prompt("Escolha o modo de exibição (1 ou 2): "));

  let media = calcularMedia(n1, n2);
  exibirResultado(media, modo);
}

for (let i = 1; i <= 3; i++) {
  processarAluno(i);
}
