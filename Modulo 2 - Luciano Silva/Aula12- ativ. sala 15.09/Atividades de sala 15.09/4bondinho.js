const prompt = require('prompt-sync')();

// Entrada
const A = parseFloat(prompt("Número de alunos: "));
const M = parseFloat(prompt("Número de monitores: "));

// Saida

if (A >= 1 && A <= 50 && M >= 1 &&  M <= 50 &&  A + M <= 50) {
    console.log("Sim\n");
} else {
    console.log("Não\n");
} 