/*
const prompt = require('prompt-sync')();

const M = parseInt(prompt("Idade de Dona Mônica (M): "));
const A = parseInt(prompt("Idade de um filho (A): "));
const B = parseInt(prompt("Idade de outro filho (B): "));

const C = M - (A + B);

let maisVelho;

if (A >= B && A >= C) {
    maisVelho = A;
} else if (B >= A && B >= C) {
    maisVelho = B;
} else {
    maisVelho = C;
}

console.log("Idade do filho mais velho:", maisVelho)
*/

const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

const lines = input.trim().split("\n");

const M = parseInt(lines[0]);
const A = parseInt(lines[1]);
const B = parseInt(lines[2]);

const C = M - (A + B);

let maisVelho;

if (A >= B && A >= C) {
    maisVelho = A;
} else if (B >= A && B >= C) {
    maisVelho = B;
} else {
    maisVelho = C;
}

console.log(maisVelho);
