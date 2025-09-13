const prompt = require('prompt-sync')();

function calMedia(valor){
    let situacao;
    let media = valor/2;
    if (media >= 7){
        situacao = "Aprovado"
    }else if (media >= 5 && media < 7){
        situacao = "Reprovado"
    } else {
        situacao = "Reprovado"
    }
    return {
        media: media, situacao: situacao
    };
}
let nota;
let soma = 0;
do{
    for(let i = 0; i < 2; i++){
        let nota = prompt("Nota" + i + ": ");
        for(let j = 0; j < 1; j++){
            let nota = prompt("Nota" + i + ": ");
            let notaNum = parseFloat(nota);
            soma+=notaNum;
            if(j === 1){
                console.log("Aluno " +j+ " - Média " + calMedia(soma).media + " - Situacao: " + media.situacao)
            }
        }
    }
} while (isNaN(nota) || nota < 0 || nota > 10);
    
process.exit();