const prompt = require('prompt-sync')();

var A = parseFloat(prompt("Digite o valor de A: "));
var B = parseFloat(prompt("Digite o valor de B: "));
var C = parseFloat(prompt("Digite o valor de C: "));

var somaAB = A + B;

console.log(`A soma de A e B é: ${somaAB}`);

if (somaAB < C) {
    console.log(`A soma (${somaAB}) é menor que C (${C}).`);
} else {
    console.log(`A soma (${somaAB}) NÃO é menor que C (${C}).`);
}