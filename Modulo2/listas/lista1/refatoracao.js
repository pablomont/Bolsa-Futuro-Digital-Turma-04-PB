const prompt = require('prompt-sync')();

function lerNota(numero) {
    const entrada = prompt(`Digite a nota ${numero}: `);
    const nota = parseFloat(entrada);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log(`Valor ${entrada} não suportado. Digite uma nota entre 0 e 10.`);
        process.exit();
    }
    return nota;
}

function calcularMedia(notas) {
    return notas.reduce((soma, valor) => soma + valor, 0) / notas.length;
}

function verificarSituacao(media, notaAprovacao, notaRecuperacao) {
    if (media >= notaAprovacao) {
        return "APROVADO";
    } else if (media >= notaRecuperacao) {
        return "RECUPERAÇÃO";
    } else {
        return "REPROVADO";
    }
}

function verificarConceito(media) {
    if (media >= 9.0) return "A";
    if (media >= 7.0) return "B";
    if (media >= 5.0) return "C";
    if (media >= 3.0) return "D";
    return "F";
}

function exibirSimples(situacao) {
    console.log(`Situação: ${situacao}`);
}

function exibirDetalhado(media, situacao) {
    console.log(`Média: ${media.toFixed(1)} – Situação: ${situacao}`);
}

function exibirConceito(media) {
    console.log(`Média: ${media.toFixed(1)} – Conceito: ${verificarConceito(media)}`);
}

function escolherModoExibicao(media, situacao) {
    console.log("\n=== MODO DE EXIBIÇÃO ===");
    console.log("1 – Simples");
    console.log("2 – Detalhado");
    console.log("3 – Conceito");
    const modo = prompt("Escolha o modo de exibição (1, 2 ou 3): ");

    if (modo === "1") {
        exibirSimples(situacao);
    } else if (modo === "2") {
        exibirDetalhado(media, situacao);
    } else if (modo === "3") {
        exibirConceito(media);
    } else {
        console.log(`❌ ERRO: opção ${modo} não suportada.`);
        process.exit();
    }
}

function processarAluno(numeroAluno, notaAprovacao, notaRecuperacao) {
    console.log(`\n=== ALUNO ${numeroAluno} ===`);
    const notas = [];
    for (let i = 1; i <= 2; i++) {
        notas.push(lerNota(i));
    }

    const media = calcularMedia(notas);
    const situacao = verificarSituacao(media, notaAprovacao, notaRecuperacao);

    escolherModoExibicao(media, situacao);
}

//configuracoes
console.log("=== SISTEMA DE AVALIAÇÃO ===");
const notaAprovacao = parseFloat(prompt("Digite a média mínima para aprovação: "));
const notaRecuperacao = parseFloat(prompt("Digite a média mínima para recuperação: "));

for (let i = 1; i <= 3; i++) {
    processarAluno(i, notaAprovacao, notaRecuperacao);
}
