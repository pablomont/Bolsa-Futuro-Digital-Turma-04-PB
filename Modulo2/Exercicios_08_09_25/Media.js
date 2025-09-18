
const prompt = require('prompt-sync')()

function Media(numAluno){

    let nota1 = parseFloat(prompt(`Informe a primeira nota do ${numAluno}º aluno: `))
    let nota2 = parseFloat(prompt(`Informe a segunda nota do ${numAluno}º aluno: `))

    let media = (nota1 + nota2)/2

    return media 
}



let aluno1 = Media(1)
let aluno2 = Media(2)
let aluno3 = Media(3)

console.log(`Média (aluno 1): ${aluno1}`)
console.log(`Média (aluno 2): ${aluno2}`)
console.log(`Média (aluno 3): ${aluno3}`)


