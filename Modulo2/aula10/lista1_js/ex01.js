const prompt = require('prompt-sync')();
var nome = Nome()

console.log(`Olá ${nome}, seja bem vindo ao mundo da programação.`)

function Nome(){
    return prompt("Informe o seu nome: ");
}