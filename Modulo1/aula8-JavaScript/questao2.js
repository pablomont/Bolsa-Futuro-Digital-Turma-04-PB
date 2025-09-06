const prompt = require('prompt-sync')();
let nota1, nota2, media
nota1 = parseFloat(prompt("informe a nota 1: "))
nota2 = parseFloat(prompt("informe a nota 2: "))
media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log("Aprovado\n")
} else if (media >= 5) {
    console.log("Recuperação\n")
} else {
    console.log("Reprovado\n")
}