const prompt = require("prompt-sync")();

function readName(){
  let nome = prompt("Digite seu nome: ");
  let sobrenome = prompt("Digite seu sobrenome: ");
  return { nome, sobrenome }
}
function printName(nome, sobrenome) {
    console.log(`Seja bem vindo ${nome} ${sobrenome}`);
}

function readAndDisplay() {
  let pessoa = readName()
  printName(pessoa.nome, pessoa.sobrenome)
}

for (let i = 0; i < 10; i++) {
  readAndDisplay()
}
