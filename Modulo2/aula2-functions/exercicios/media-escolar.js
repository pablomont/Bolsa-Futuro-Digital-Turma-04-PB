function verificarSituacao(media, notaAprovacao, notaRecuperacao) {
  if (media >= notaAprovacao) {
    return "Aprovado";
  } else if (media >= notaRecuperacao) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function sistemaAvaliacao(){
    console.log("== SISTEMA DE AVALIAÇÃO ==");
    let notaAprovacao = parseFloat(prompt("Digite a média mínima para aprovação: "));
    let notaRecuperacao = parseFloat(prompt("Digite a média mínima para recuperação: "));
    return { notaAprovacao, notaRecuperacao }
}

function isAprovado(notaA, notaB, notaAprovacao, notaRecuperacao) {
  media = (notaA + notaB) / 2;  
  let situacao = verificarSituacao(media, notaAprovacao, notaRecuperacao);
  displayValues(situacao, media);
}

function isValid(nota) {
  if (nota > 10 || nota < 0 || isNaN(nota)) return false;
  else return true;
}

function mediaEscolar(minimos) {
  
  nota1 = parseFloat(prompt("informe a nota 1: "));
  if (isValid(nota1)) {
    nota2 = parseFloat(prompt("informe a nota 2: "));
    if (isValid(nota2)) {
      
      isAprovado(nota1, nota2, minimos.notaAprovacao, minimos.notaRecuperacao);
      console.log("---------------------");
    } else {
      console.log("Entrada inválida: digite um número de 0 a 10");
      process.exit();
    }
  } else {
    console.log("Entrada inválida: digite um número de 0 a 10");
    process.exit();
  }
}

function displayValues(situacao, media) {
  console.log("== MODO DE EXIBIÇÃO ==");
  while (true) {
    var tipo = parseInt(prompt("Escolha o modo de exibição (1, 2 ou 3): "));
    if (tipo === 1) {
      console.log(`situação: ${situacao}`);
      break
    } else if (tipo === 2) {
      console.log(`Média: ${media} - situação: ${situacao}`);
      break
    } else if (tipo === 3) {
        if ((9 <= media) && (media <= 10)){
            console.log(`Média: ${media} - conceito: A`);
        } else if ((7 <= media) && (media < 9)){
            console.log(`Média: ${media} - conceito: B`);
        } else if ((5 <= media) && (media < 7)) {
            console.log(`Média: ${media} - conceito: C`);
        } else if ((3 <= media) && (media < 5)) {
            console.log(`Média: ${media} - conceito: D`);
        } else if ((0 <= media) && (media < 3)) {
            console.log(`Média: ${media} - conceito: F`);
        }
        break
    }  else {
        console.log("X ERRO: digite apenas 1 ou 2")
    }
  }
}

const prompt = require("prompt-sync")();

let minimos = sistemaAvaliacao()

for (let i = 0; i < 3; i++) {
  console.log("== ALUNO %i ==", i);
  mediaEscolar(minimos);
}
