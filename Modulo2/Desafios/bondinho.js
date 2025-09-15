/*
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");*/

const prompt = require('prompt-sync')();

/*let A = parseInt(input.split("\n")[0])
let M = parseInt(input.split("\n")[1])*/

let A = parseInt(prompt("Digite o número de alunos: "))
let M = parseInt(prompt("Digite o número de monitores: "))
if (A+M<=50)
    console.log("S")
else
    console.log("N")
