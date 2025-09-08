const prompt = require('prompt-sync')()

let nome, sobrenome

nome = prompt("Olá! por favor, digite seu nome: ")
sobrenome = prompt("Agora, por favor, digite seu sobrenome: ")

var resposta = prompt(`Seu nome é ${nome} ${sobrenome}, correto? `)

if (resposta = "sim"){
    console.log("Perfeito!")
}else{
    nome = prompt("Por favor, digite novamente seu nome: ")
    sobrenome = prompt("Agora, digite seu sobrenome novamente: ")

var resposta = prompt(`Seu nome é ${nome} ${sobrenome}, correto? `)
}