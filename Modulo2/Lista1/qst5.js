const prompt = require('prompt-sync')({ sigint: true });

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

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function situacaoDoAluno(media) {
  if (media >= 7) return "APROVADO";
  if (media >= 5) return "RECUPERAÇÃO";
  return "REPROVADO";
}

function mostrarResultado(nome, media, situacao) {
  console.log(`Aluno: ${nome}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Situação: ${situacao}\n`);
}

function processarAluno(ordem) {
  const ordens = ["primeiro", "segundo", "terceiro"];
  const nome = lerNome(`Digite o nome do ${ordens[ordem]} aluno: `);
  const n1 = lerNota("Digite a primeira nota: ");
  const n2 = lerNota("Digite a segunda nota: ");
  const n3 = lerNota("Digite a terceira nota: ");

  //realiza as operaçoes
  const media = calcularMedia(n1, n2, n3);
  const situacao = situacaoDoAluno(media);
  mostrarResultado(nome, media, situacao);
}

//contador para 3 alunos
for (let i = 0; i < 3; i++) {
  processarAluno(i);
}
