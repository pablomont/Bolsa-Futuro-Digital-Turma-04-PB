const prompt = require('prompt-sync')()

function saudacao (nome, sobrenome){
    console.log(`Seja bem vindo ${nome} ${sobrenome}!`)
}

let nome, sobrenome

nome = prompt("Olá! por favor, digite seu nome: ")
sobrenome = prompt("Agora, por favor, digite seu sobrenome: ")

saudacao (nome, sobrenome)