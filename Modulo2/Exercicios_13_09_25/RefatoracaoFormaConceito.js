const prompt = require('prompt-sync')()

function VerificarSituacao(media, notaAprovacao, notaRecuperacao){

    if(media >= notaAprovacao){
        return 'APROVADO.';
    }

    else if(media >= notaRecuperacao){
        return 'RECUPERÇÃO.';
    }

    else{
        return 'REPROVADO.';
    }
}

function verificarConceito(media){
    
    if(media >= 9 && media <= 10){
        return 'A';
    }

    else if(media >= 7 && media < 9){
        return 'B';
    }

    else if(media >= 5 && media < 7){
        return 'C';
    }

    else if(media >= 3 && media < 5){
        return 'D';
    }

    else{
        return 'F';
    }
}

function Media(NumAluno){

    let nota1 = parseInt(prompt(`Informe a primeira nota do ${NumAluno}º aluno: `));
    let nota2 = parseInt(prompt(`Informe a segunda nota do ${NumAluno}º aluno: `));

    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
         return 'Entrada inválida: digite uma nota entre 0 e 10.';
    }

    else{
        
        let media = (nota1 + nota2)/2;

        return media;
    }
}

function FormaExibicao(media, situacao, conceito){

    console.log('\n=== MODO DE EXIBIÇÃO ===\n1 - Simples\n2 - Detalhado\n3 - Conceito');
    const modoExibicao = prompt('Escolha o modo de exibição (1, 2 ou 3): ');

    if(modoExibicao === '1'){
        console.log(`Situação: ${situacao}`);
    }

    else if(modoExibicao === '2'){
        console.log(`Média: ${media} - Situação: ${situacao}`);
    }

    else if (modoExibicao === '3'){

        console.log(`Conceito: ${conceito}`);
    }
    else{
        console.log('ERRO: Digite apenas 1 ou 2.');
    }
}

console.log('=== SISTEMA DE AVALIAÇÃO ===');

let mediaMinAprov = parseFloat(prompt('Digite a média mínima para aprovação: '))
let medMinRec = parseFloat(prompt('Digite a média mínima para recuperação: '))

console.log('\n=== ALUNO1 ===')

let mediaAluno1 = Media(1);
let SituacaoAluno1 = VerificarSituacao(mediaAluno1, mediaMinAprov, medMinRec);
let ConceitoAluno1 = verificarConceito(mediaAluno1);
FormaExibicao(mediaAluno1, SituacaoAluno1, ConceitoAluno1);

console.log('\n=== ALUNO2 ===')

let mediaAluno2 = Media(2);
let SituacaoAluno2 = VerificarSituacao(mediaAluno2, mediaMinAprov, medMinRec);
let ConceitoAluno2 = verificarConceito(mediaAluno2);
FormaExibicao(mediaAluno2, SituacaoAluno2, ConceitoAluno2)

console.log('\n=== ALUNO3 ===')

let mediaAluno3 = Media(3);
let SituacaoAluno3 = VerificarSituacao(mediaAluno3, mediaMinAprov, medMinRec);
let ConceitoAluno3 = verificarConceito(mediaAluno3);
FormaExibicao(mediaAluno3, SituacaoAluno3, ConceitoAluno3)