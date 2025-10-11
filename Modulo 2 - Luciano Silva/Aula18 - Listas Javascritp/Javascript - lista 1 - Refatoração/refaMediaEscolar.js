// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Notas validas
function restricao(nota1, nota2) {
  const validas = (
    nota1 >= 0 && nota1 <= 10 && 
    nota2 >= 0 && nota2 <= 10
);
   
  if (!validas) {
  console.log ("ERRO: Informe apenas números de 0 a 10.\n");
  process.exit();
  }
}

// Aprovação: configuravel
function verificaSituacao(media, notaAprovacao, notaRecuperacao) {
  if (media >= notaAprovacao) return "APROVADO";
  if (media >= notaRecuperacao) return "RECUPERAÇÃO";
  return "REPROVADO";
}
//Sistema de valiação configuravel: AVISO
function validarEntrada(valor) {
    if (isNaN(valor) || valor < 0 || valor > 10) {
        console.log("ERRO: Informe apenas números de 0 a 10\n");
        process.exit();
    }
}
// Exibição função
function exibirResultado(media, situacao, modo) {
    switch(modo) {
        case 1: // Simples
            console.log(`Situação: ${situacao}`);
            break;
        case 2: // Detalhado
            console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);
            break;
        case 3: // Conceito
            let conceito;
            if (media >= 9) conceito = 'A';
            else if (media >= 7) conceito = 'B';
            else if (media >= 5) conceito = 'C';
            else if (media >= 3) conceito = 'D';
            else conceito ='F';
            console.log(`Média: ${media.toFixed(2)} - Conceito: ${conceito}`);
            break;
        default:
            console.log("ERRO: Digite apenas 1,2 ou 3");
    }
}
// Perguntas, resultados, restrição, função de media:

//Sistema de avaliação
console.log(" ");
console.log("=== SISTEMA DE AVALIAÇÃO ===");
const notaAprovacao = parseFloat(prompt("Digite média mínima para aprovação: "));
const notaRecuperacao = parseFloat(prompt("Digite média mínima para aprovação: "));
validarEntrada(notaRecuperacao, "Erro: informe apenas números de 0 a 10");

// === Aluno 1 ===
console.log(" ");
console.log("=== Aluno 1 ===");
const nota1 = parseFloat(prompt("Informe a nota 1: "));
const nota2 = parseFloat(prompt("Informe a nota 2: "));
restricao(nota1, nota2,);
const media1 = (nota1 + nota2) / 2;
const sit1 = verificaSituacao(media1, notaAprovacao, notaRecuperacao);
//console.log(`Media: ${media1}- Situação: ${sit1}`)

// === MODO DE EXIBIÇÃO 1 ===
console.log(" ");
console.log("=== MODO DE EXIBIÇÃO 1 ===");
console.log("1.Simples (Situação)");
console.log("2.Detalhado (Média + Situação)");
console.log("3.conceito (Média + Conceito)");
const modo1 = parseFloat(prompt("Escolha o modo de exibição (1,2 ou 3): "));
exibirResultado (media1, sit1, modo1);

// === Aluno 2 ===
console.log(" ");
console.log("=== Aluno 2 ===");
const nota3 = parseFloat(prompt("Informe a nota 1: "));
const nota4 = parseFloat(prompt("Informe a nota 2: "));
restricao(nota3, nota4,);
const media2 = (nota3 + nota4) / 2;
const sit2 = verificaSituacao(media1, notaAprovacao, notaRecuperacao);
//console.log(`Media: ${media2}- Situação: ${sit2}`)

// === MODO DE EXIBIÇÃO 2 ===
console.log(" ");
console.log("=== MODO DE EXIBIÇÃO 2 ===");
console.log("1.Simples");
console.log("2.Detalhado");
console.log("3.conceito");
const modo2 = parseFloat(prompt("Escolha o modo de exibição (1,2 ou 3): "));
exibirResultado (media2, sit2, modo2);

// === Aluno 3 ===
console.log(" ");
console.log("=== Aluno 3 ===");
const nota5 = parseFloat(prompt("Informe a nota 1: "));
const nota6 = parseFloat(prompt("Informe a nota 2: "));
restricao(nota5, nota6,);
const media3 = (nota5 + nota6) / 2;
const sit3 = verificaSituacao(media1, notaAprovacao, notaRecuperacao);
//console.log(`Media: ${media3}- Situação: ${sit3}`)

// === MODO DE EXIBIÇÃO 3 ===
console.log(" ");
console.log("=== MODO DE EXIBIÇÃO 3 ===");
console.log("1.Simples");
console.log("2.Detalhado");
console.log("3.conceito");
const modo3 = parseFloat(prompt("Escolha o modo de exibição (1,2 ou 3): "));
exibirResultado (media3, sit3, modo3);