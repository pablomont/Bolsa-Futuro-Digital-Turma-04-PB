const prompt = require("prompt-sync")();

console.log("=== SISTEMA DE AVALIAÇÃO ===");
const mediaAprovacao = Number(prompt("Digite a média mínima para aprovação: "));
const mediaRecuperacao = Number(prompt("Digite a média mínima para recuperação: "));


function avaliarAluno(numero) {
    console.log(`\n=== ALUNO ${numero} ===`);
    let nota1 = Number(prompt("Digite a primeira nota: "));
    let nota2 = Number(prompt("Digite a segunda nota: "));

    let media = (nota1 + nota2) / 2;
    let situacao = "";

    if (media >= mediaAprovacao) {
        situacao = "APROVADO";
    } else if (media >= mediaRecuperacao) {
        situacao = "RECUPERAÇÃO";
    } else {
        situacao = "REPROVADO";
    }

    console.log(`Média: ${media} – Situação: ${situacao}`);
}


for (let i = 1; i <= 3; i++) {
    avaliarAluno(i);
}