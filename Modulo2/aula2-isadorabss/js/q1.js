const prompt = require('prompt-sync')();

function saudacao(nome){
   console.log("Olá " + nome + ", bem-vindo(a) ao mundo da programação!"); 
}

let nome = prompt("Nome: ");
saudacao(nome);
process.exit();