const prompt = require('prompt-sync')(); // sempre retorna uma string 
console.log("Cálculo de Média Escolar");

let nota1String = prompt("Informe a primeira nota: ");
let nota1 = parseFloat(nota1String.replace(",", "."));

let nota2String = prompt("Informe a segunda nota: ");
let nota2 = parseFloat(nota2String.replace(",", "."));

let media = (nota1 + nota2) / 2;

console.log("A média do aluno é: " + media.toFixed(2));

if (media >= 7) {
    console.log("Situação: Aprovado");
} else if (media >= 5) {
    console.log("Situação: Recuperação");
} else {
    console.log("Situação: Reprovado");
}
