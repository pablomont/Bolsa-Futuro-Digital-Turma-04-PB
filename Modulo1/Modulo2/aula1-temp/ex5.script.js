const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("nota 1:"))
let nota2 = parseFloat(prompt("nota 2:"))

let.media = (nota1 + nota2) / 2;

if (media >= 7.0){
    console.log("Aluno 1 - Aprovado")
} else if (media >= 5.0) { 
    console.log("Aluno 1- Reprovado")
} else {
    console.log("Aluno 1 - Reprovado! Precisa estudar mais.")
}