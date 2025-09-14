const prompt = require('prompt-sync')();

function Media(){
    n1 = parseFloat(prompt("Digite a primeira nota: "))
    n2 = parseFloat(prompt("Digite a segunda nota: "))

    media = (n1 + n2) / 2
    return media
}

function Situacao(){
    media = Media()

    if(media >= 7){
        console.log(`Aluno com media ${media} - APROVADO!`)
    } else if (media >=5){
        console.log(`Aluno com media ${media} - RECUPERACAO!`)
    } else {
        console.log(`Aluno com media ${media} - REPROVADO!`)
    }
}

console.log("Primeiro aluno")
Situacao()
console.log("Segundo aluno")
Situacao()
console.log("Terceiro aluno")
Situacao()