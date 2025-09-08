const prompt = require('prompt-sync')();
function receiveName(){
    let name = prompt("Qual o seu nome: ")
    return name
}
function displayMessage(name){
    console.log(`Olá ${name}, bem-vindo ao mundo da programação!`)
}

let nome = receiveName()
displayMessage(nome)