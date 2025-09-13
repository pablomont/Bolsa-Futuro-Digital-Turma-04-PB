const prompt = require('prompt-sync')();
const nome = prompt("digite seu nome:  ");

function saudaçao(nome) {
    var saudacao = `Olá ${nome}, bem-vindo ao mundo da programação!`
    console.log(saudacao)
}

saudaçao(nome)