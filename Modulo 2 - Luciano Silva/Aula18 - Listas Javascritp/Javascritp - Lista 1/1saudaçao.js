// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Pergunta os dados do usuário
const nome = prompt("Informe seu nome: ");

// Mostra o resultado
console.log(`Olá ${nome} bem vindo ao mundo da programação!`);