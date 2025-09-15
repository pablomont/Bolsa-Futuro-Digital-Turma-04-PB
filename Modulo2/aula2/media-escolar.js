const prompt = require("prompt-sync")();

function validarNota(nota){
    if(isNaN(nota) || nota < 0 || nota > 10){
        console.log("Entrada inválida: digite um número de 0 e 10.");
        process.exit();
    }
}

function calcularMedia(n1,n2) {
    return (n1 + n2) / 2;
}

function verificaSituacao(media, notaAprovacao, notaRecuperacao) {
    if (media >= notaAprovacao) {
        return "APROVADO";
    } else if (media >= notaRecuperacao) {
        return "RECUPERAÇÃO";
    } else {
        return "REPROVADO";
    }
}

function verificarConceito(media) {
    if (media >= 9.0) {
        return "A";
    } else if (media >= 7.0) {
        return "B";
    } else if (media >= 5.0) {
        return "C";
    } else if (media >= 3.0) {
        return "D";
    } else {
        return "F";
    }
}

function exibirSimples(situacao) {
    console.log(`Situação: ${situacao}`);
}

function exibirDetalhado(media, situacao) {
    console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);
}

function exibirConceito(media) {
    const conceito = verificarConceito(media);
    console.log(`Média: ${media.toFixed(2)} - Conceito: ${conceito}`);
}

function lerAluno(numeroAluno, notaAprovacao, notaRecuperacao) {
    console.log(`\n=== ALUNO ${numeroAluno} ===`);

    const nota1 = parseFloat(prompt("Digite a primeira nota: "));
    validarNota(nota1);

    const nota2 = parseFloat(prompt("Digite a segunda nota: "));
    validarNota(nota2);

    const media = calcularMedia(nota1, nota2);
    const situacao = verificaSituacao(media, notaAprovacao, notaRecuperacao);

    console.log("\n=== MODO DE EXIBIÇÃO ===");
    console.log("1 - Simples");
    console.log("2 - Detalhado");
    console.log("3 - Conceito");

    const modo = prompt("Escolha o modo de exibição (1, 2 ou 3): ");

    if (modo === "1") {
        exibirSimples(situacao);
    } else if (modo === "2") {
        exibirDetalhado(media, situacao);
    } else if (modo === "3") {
        exibirConceito(media);
    } else {
        console.log("Erro: Digite apenas 1, 2 ou 3.");
        process.exit();
    }
}