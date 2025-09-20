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

function FormaExibicao(media, situacao){

    console.log('\n=== MODO DE EXIBIÇÃO ===\n1 - Simples\n2 - Detalhado');
    const modoExibicao = prompt('Escolha o modo de exibição (1 ou 2): ');

    if(modoExibicao === '1'){
        console.log(`Situação: ${situacao}`);
    }

    else if(modoExibicao === '2'){
        console.log(`Média: ${media} - Situação: ${situacao}`);
    }
    else{
        console.log('ERRO: Digite apenas 1 ou 2.');
    }
}

console.log('=== SISTEMA DE AVALIAÇÃO ===');

let mediaMinAprov = parseFloat(prompt('Digite a média mínima para aprovação: '));
let medMinRec = parseFloat(prompt('Digite a média mínima para recuperação: '));

console.log('\n=== ALUNO1 ===');

let mediaAluno1 = Media(1);
let SituacaoAluno1 = VerificarSituacao(mediaAluno1, mediaMinAprov, medMinRec);
FormaExibicao(mediaAluno1, SituacaoAluno1);

console.log('\n=== ALUNO2 ===');

let mediaAluno2 = Media(2);
let SituacaoAluno2 = VerificarSituacao(mediaAluno2, mediaMinAprov, medMinRec);
FormaExibicao(mediaAluno2, SituacaoAluno2);

console.log('\n=== ALUNO3 ===');

let mediaAluno3 = Media(3);
let SituacaoAluno3 = VerificarSituacao(mediaAluno3, mediaMinAprov, medMinRec);
FormaExibicao(mediaAluno3, SituacaoAluno3);