const prompt = require(`prompt-sync`)();
var nome = prompt("Digite seu nome: ");

function saudacao(nome) {
    return console.log(`Olá ${nome}, bem-vindo ao mundo da programação!`);
}
saudacao(nome)