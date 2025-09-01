const prompt = require('prompt-sync')();

let nota1 = prompt("Informe nota 1 : ")
nota1num = parseFloat(nota1)
let nota2 = prompt("Informe nota 2 : ")
nota2num = parseFloat(nota2)

media = (nota1num + nota2num) / 2

if (media >= 7) {
    console.log("Aprovado")
}
else if (media => 5 && media < 7) {
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}
process.exit();