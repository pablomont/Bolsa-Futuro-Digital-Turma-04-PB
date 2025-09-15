const prompt = require("prompt-sync")();

const A = parseInt(prompt("A, digite 0 ou 1: "));
const B = parseInt(prompt("B, digite 0 ou 1: "));
const C = parseInt(prompt("C, digite 0 ou 1: "));

if (A !== B && A !== C) {
    console.log('A');
} else if (B !== A && B !== C) {
    console.log('B');
} else if (C !== A && C !== B) {
    console.log('C');
} else {
    console.log('*');
} 

/*
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").match(/\S/g);
const [a, b, c] = input

if (A !== B && A !== C) {
    console.log('A');
} else if (B !== A && B !== C) {
    console.log('B');
} else if (C !== A && C !== B) {
    console.log('C');
} else {
    console.log('*');
}
    */
