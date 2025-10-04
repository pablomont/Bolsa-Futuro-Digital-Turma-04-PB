const prompt = require('prompt-sync')();

// Pergunta entrada  do jogo "Zerinho ou Um"
const entrada = parseFloat(prompt("Entrada: "));

// Vencedor

if (entrada === 110) {
    console.log("Vencedor é C\n");
} else if (entrada === 0) {
    console.log("Ninguém\n");
} else if (entrada === 100) {
    console.log("Vencedor é A\n");
} else {
    console.log("Ningém\n");
}