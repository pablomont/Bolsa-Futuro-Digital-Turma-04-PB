const prompt = require('prompt-sync')();

// Entrada
const P = parseFloat(prompt("Porta P: "));
const R = parseFloat(prompt("Porta R: "));

// Saida

if ( P === 0) {
    console.log("Saída C\n");
} else if (P === 1 && R === 0) {
    console.log("Saída B\n");
} else if (P === 1 && R === 1) {
    console.log("Saída A\n");
} else {
    console.log("Entrada Invalida\n");
}