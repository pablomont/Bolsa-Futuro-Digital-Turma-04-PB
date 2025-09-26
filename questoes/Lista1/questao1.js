const prompt = require("prompt-sync") ();
//npm install prompt-sync

function saudacao(nome){
    return console.log(`Olá ${nome}, bem-vindo ao mundo da programação.`)
}

let nome = prompt("Digite seu nome: ")

saudacao(nome)