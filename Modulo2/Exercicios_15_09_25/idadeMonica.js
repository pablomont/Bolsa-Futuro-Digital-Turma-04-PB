const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const linhas = input.trim().split('\n');

let M = parseInt(linhas[0]);
let UM = parseInt(linhas[1]);
let B = parseInt(linhas[2]);

let C = M - (UM + B);

let idadeMaisVelho = Math.max(UM, B, C);

console.log(idadeMaisVelho);