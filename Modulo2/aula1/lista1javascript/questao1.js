/*const prompt = require('prompt-sync') ();
var nome = passarNome()
console.log(`Olá ${nome}, bem-vindo ao mundo da programação!`)

function passarNome(){
    return prompt("Informe o seu nome: ")
} */

const prompt = require('prompt-sync') ();
var nome = prompt("digite seu nome: ")

function saudacao(){
    return console.log(`Olá ${nome}, bem-vindo ao mundo da programação!`)
} 
saudacao(nome)
