const prompt = require('prompt-sync')();

function saudacao(nome) {
    return `Olá ${nome}, bem-vindo ao mundo da programação!`;
}

let nomeUsuario = prompt("Digite seu nome: ");
console.log(saudacao(nomeUsuario));
