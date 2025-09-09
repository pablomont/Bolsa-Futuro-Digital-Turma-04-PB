
const prompt = require('prompt-sync')();

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function verificarSituacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

function lerNotasAluno(nomeAluno) {
  var notas = [];
  for (var i = 1; i <= 3; i++) {
    var entrada = prompt(`Digite a nota ${i} do ${nomeAluno}: `);
    var nota = parseFloat(entrada);

    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log("Valor inválido! Digite um número entre 0 e 10.");
      process.exit();
    }
    notas.push(nota);
  }
  return notas;
}

for (var i = 1; i <= 3; i++) {
  console.log(`Aluno ${i}`);
  var notas = lerNotasAluno(`Aluno ${i}`);
  var media = calcularMedia(notas[0], notas[1], notas[2]);
  var situacao = verificarSituacao(media);
  console.log(`Média do Aluno ${i}: ${media.toFixed(2)} - ${situacao}`);
}