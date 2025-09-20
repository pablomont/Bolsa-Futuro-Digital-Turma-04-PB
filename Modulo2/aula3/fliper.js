// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let P = parseInt(input.split(" ")[0])
let R = parseInt(input.split(" ")[1])

let caminho;

if (P === 0) {
    caminho = "C";
} else {
    
    if (R === 0) {
        caminho = "B";
    } else {
        caminho = "A";
    }
}

console.log(caminho);

/*
const prompt = require("prompt-sync")();

const P = parseInt(prompt("Digite o valor de P (0 ou 1): "));
let caminho;

if (P === 0) {
    caminho = "C";
} else {
    const R = parseInt(prompt("Digite o valor de R (0 ou 1): "));
    if (R === 0) {
        caminho = "B";
    } else {
        caminho = "A";
    }
}

console.log(caminho);
*/