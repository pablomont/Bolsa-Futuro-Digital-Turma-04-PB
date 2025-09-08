const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Informe a nota 1: "));
let nota2 = parseFloat(prompt("Informe a nota 2: "));

let media = (nota1 + nota2) / 2;

//mostra so 1 casa decimal na divisao
console.log("Média =", media.toFixed(1));

if (media >= 7) {
    console.log("Aprovado");

} else if (media >= 5) {
    console.log("Recuperação");

} else {
    console.log("Reprovado");
}
