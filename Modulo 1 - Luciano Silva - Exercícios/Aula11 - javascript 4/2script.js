// Biblioteca
const prompt = require('prompt-sync')();

// Pergunta
let n1 = parseFloat(prompt("Primeiro número:"));
if (isNaN(n1)){ 
  console.log (`O valor não é número ${n1}`);
  process.exit();}
let n2 = parseFloat(prompt("Segundo número:"));
if (isNaN(n2)){ 
  console.log (`O valor não é número ${n2}`);
  process.exit();}
let op = prompt("Operação (+, -, *, /):");

let res = 
  op === "+" ? n1 + n2 :
  op === "-" ? n1 - n2 :
  op === "*" ? n1 * n2 :
  op === "/" ? (n2 !== 0 ? n1 / n2 : "Erro: divisão por zero") :
  "Operação inválida. Por favor use (+, -, *, /):";

  // Resultado
console.log(`Resultado ${res}`);