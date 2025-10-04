const prompt = require('prompt-sync')();

// Entrada
const M = parseInt(prompt("Idade de Mônica: "));
const A = parseInt(prompt("Idade do filho 1: "));
const B = parseInt(prompt("Idade do filho 2: "));

// Calcula o terceiro filho
const C = M - (A + B);

// Validação
if (M >= 40 && M <= 110 && A >= 1 && A < M && B >= 1 && B < M && A !== B) {
    console.log(Math.max(A, B, C));
} else {
    console.log("Entrada inválida");
}