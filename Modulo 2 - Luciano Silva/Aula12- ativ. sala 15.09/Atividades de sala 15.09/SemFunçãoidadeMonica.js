const prompt = require('prompt-sync')();

// Entrada
const M = parseFloat(prompt("Idade de Mônica: "));
const A = parseFloat(prompt("Idade do filho 1: "));
const B = parseFloat(prompt("Idade do filho 2: "));

// Cálculo do terceiro filho
const C = M - (A + B);

// Validação e Saída
if (M >= 40 && M <= 110 && A >= 1 && A < M && B >= 1 && B < M && A !== B) {
    const maisVelho = Math.max(A, B, C); // pega o maior entre os três
    console.log(`A idade do filho mais velho é ${maisVelho}`);
} else {
    console.log("Entrada inválida\n");
    process.exit();
}