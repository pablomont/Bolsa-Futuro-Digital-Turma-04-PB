const prompt = require('prompt-sync')()

function Media(NumAluno){

    let nota1 = parseInt(prompt(`Informe a primeira nota do ${NumAluno}º aluno: `));
    let nota2 = parseInt(prompt(`Informe a segunda nota do ${NumAluno}º aluno: `));

    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
         return 'Entrada inválida: digite uma nota entre 0 e 10.'
    }

    else{
        
        let media = (nota1 + nota2)/2;

        return `Média: ${media}`;
    }
}

console.log("=== Aluno1 ===");
console.log(Media(1));
console.log("=== Aluno2 ===");
console.log(Media(2));
console.log("=== Aluno3 ===");
console.log(Media(3));

