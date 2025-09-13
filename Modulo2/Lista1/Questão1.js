const prompt = require('prompt-sync')();

function saudacao(nome) {
    return `Olá ${nome}, bem-vindo ao mundo da programação!!`;
}

let nome = prompt("Informe seu nome: ");
console.log(saudacao(nome));

process.exit();
