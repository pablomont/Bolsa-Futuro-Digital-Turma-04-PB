const prompt = require('prompt-sync')();

nome = prompt("Digite seu nome: ")


function olaMundo(){
    nome = prompt("Digite seu nome: ")
    console.log(`Olá, ${nome}, bem-vindo ao mundo da programação!`)
}

olaMundo()