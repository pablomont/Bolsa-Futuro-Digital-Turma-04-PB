function calcularMedia(notas){
    let soma = 0;
    for(let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    }   else if (media >= 5) {
        return "Recuperação";
    }   else {
        return "Reprovado";
    }
}
function avaliarAluno(nome, notas) {
    const media = calcularMedia(notas);
    const situacao = verificarSituacao(media);
    console.log(`${nome} - Média: ${media.toFixed(2)} - ${situacao}`);
}
avaliarAluno("Aluno 1", [7, 8, 6]);
avaliarAluno("Aluno 2", [5, 4, 6]);
avaliarAluno("Aluno 3", [3, 2, 4]);