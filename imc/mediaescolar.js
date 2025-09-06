const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Informe a nota 1: "));
let nota2 = parseFloat(prompt("Informe a nota 2: "));
let media = (nota1 + nota2) / 2;
console.log("A sua média é: ", media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}