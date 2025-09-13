const prompt = require('prompt-sync')();

function obterNotasAluno(nomeAluno) {
    var notas = [];
    for (var i = 0; i < 3; i++) {
        const resposta = prompt(`Digite a ${i + 1}ª nota de ${nomeAluno}:`);
        const nota = parseFloat(resposta);

        if (isNaN(nota) || nota < 0 || nota > 10) { 
            console.error("Entrada inválida. Por favor, digite um número entre 0 e 10.");
            process.exit(1); 
        }
        notas.push(nota);
    }
    return notas;
}


function calcularSituacao(notas) {
    const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / notas.length;

    var situacao;
    if (media >= 7.0) {
        situacao = "aprovado";
    } else if (media >= 5.0) {
        situacao = "recuperação";
    } else {
        situacao = "reprovado";
    }
    return { media: media, situacao: situacao };
}


function main() {
    const alunos = ["Aluno 1", "Aluno 2", "Aluno 3"];
    for (const nomeAluno of alunos) {
        console.log(`\n--- ${nomeAluno} ---`);
        const notasDoAluno = obterNotasAluno(nomeAluno);
        const resultado = calcularSituacao(notasDoAluno);

        console.log(`Média: ${resultado.media.toFixed(2)}`);
        console.log(`Situação: ${resultado.situacao}`);
    }
}


main();
