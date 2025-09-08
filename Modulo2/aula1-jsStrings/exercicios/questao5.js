function verificarMedia(media){
    if (media >= 7) {
        console.log("Aprovado\n")
    } else if (media >= 5) {
        console.log("Recuperação\n")
    } else {
        console.log("Reprovado\n")
    }
}
function isAprovado(notaA, notaB) {
    media = (notaA + notaB) / 2
    verificarMedia(media)
}

const prompt = require('prompt-sync')();

let nota1, nota2


for(let i = 1; i <= 3; i++) {
    console.log("Aluno %i", i)
    nota1 = parseFloat(prompt("informe a nota 1: "))
    nota2 = parseFloat(prompt("informe a nota 2: "))

    isAprovado(nota1, nota2)
    console.log("---------------------")
}


