const prompt = require('prompt-sync')();

// Função para validar se a nota está entre 0 e 10
function validarNota(nota) {
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Valor inválido! Digite um número entre 0 e 10.");
    process.exit();
  }
}

// Função para calcular a média
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Função para verificar a situação do aluno
function verificarSituacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

// Função para ler as 3 notas de um aluno
function lerNotasAluno(nomeAluno) {
  const notas = [];
  for (let i = 1; i <= 3; i++) {
    const entrada = prompt(`Digite a nota ${i} do ${nomeAluno}: `);
    const nota = parseFloat(entrada); // parseFloat converte uma string em um número
    validarNota(nota); // Validação usando a nova função
    notas.push(nota);
  }
  return notas;
}

// Loop para processar 3 alunos
for (let i = 1; i <= 3; i++) {
  console.log(`\n--- Aluno ${i} ---`);
  const notas = lerNotasAluno(`Aluno ${i}`);
  const media = calcularMedia(notas[0], notas[1], notas[2]);
  const situacao = verificarSituacao(media);
  console.log(`Média do Aluno ${i}: ${media.toFixed(2)} - ${situacao}`); // toFixed deixa o número de casas decimais adequado
}
