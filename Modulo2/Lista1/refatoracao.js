const prompt = require('prompt-sync')({ sigint: true });

// entradas

function lerNome(msg) {
  const nome = prompt(msg).trim();
  if (!nome) {
    console.log("Entrada inválida: o nome não pode ser vazio.");
    process.exit(1);
  }
  return nome;
}

function lerNota(msg) {
  const nota = parseFloat(prompt(msg));
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Entrada inválida: digite um número de 0 a 10.");
    process.exit(1);
  }
  return nota;
}

function lerModoExibicao() {
  console.log("\n=== MODO DE EXIBIÇÃO ===");
  console.log("1 - Simples");
  console.log("2 - Detalhado");
  console.log("3 - Conceito");
  while (true) {
    const opt = prompt("Escolha o modo de exibição (1, 2 ou 3): ").trim();
    if (["1", "2", "3"].includes(opt)) return Number(opt);
    console.log("ERRO: Digite apenas 1, 2 ou 3.");
  }
}

function lerMediasReferencia() {
  while (true) {
    console.log("\n=== SISTEMA DE AVALIAÇÃO ===");
    const notaAprovado = parseFloat(prompt("Digite a média mínima para aprovação (0 a 10): "));
    const notaRecuperacao = parseFloat(prompt("Digite a média mínima para recuperação (0 a 10): "));

    if (
      !isNaN(notaAprovado) &&
      !isNaN(notaRecuperacao) &&
      notaAprovado >= 0 && notaAprovado <= 10 &&
      notaRecuperacao >= 0 && notaRecuperacao <= 10 &&
      notaRecuperacao < notaAprovado
    ) {
      return {notaAprovado, notaRecuperacao};
    }

    console.log("ERRO: Digite valores válidos (0 a 10) e a recuperação deve ser menor que a aprovação.");
  }
}

function apresentarSimples(situacao) {
  console.log(`Situação: ${situacao}`);
}

function apresentarDetalhado(media, situacao) {
  console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);
}

function apresentarConceito(media, conceito) {
  console.log(`Média: ${media.toFixed(2)} - Conceito: ${conceito}`);
}

function mostrarResultado({ media, situacao }, modo, conceito) {
  if (modo === 1) {
    apresentarSimples(situacao);
  } else if (modo === 2) {
    apresentarDetalhado(media, situacao);
  } else {
    apresentarConceito(media, conceito);
  }
  console.log();
}

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function verificarSituacao(media, notaAprovado, notaRecuperacao) {
  if (media >= notaAprovado) return "APROVADO";
  if (media >= notaRecuperacao) return "RECUPERAÇÃO";
  return "REPROVADO";
}

function verificarConceito(media) {
  if (media >= 9) return "A";
  if (media >= 7) return "B";
  if (media >= 5) return "C";
  if (media >= 3) return "D";
  return "E";
}

function processarAluno(indiceAluno, notaAprovado, notaRecuperacao) {
  console.log(`\n=== ALUNO ${indiceAluno + 1} ===`);
  const nome = lerNome("Digite o nome do aluno: ");
  const n1 = lerNota("Digite a primeira nota: ");
  const n2 = lerNota("Digite a segunda nota: ");
  const n3 = lerNota("Digite a terceira nota: ");

  const media = calcularMedia(n1, n2, n3);
  const situacao = verificarSituacao(media, notaAprovado, notaRecuperacao);
  const modo = lerModoExibicao();
  const conceito = verificarConceito(media);

  mostrarResultado({ media, situacao }, modo, conceito);
}

const { notaAprovado, notaRecuperacao } = lerMediasReferencia();

for (let i = 0; i < 3; i++) {
  processarAluno(i, notaAprovado, notaRecuperacao);
}