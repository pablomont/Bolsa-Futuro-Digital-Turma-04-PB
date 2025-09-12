const prompt = require('prompt-sync')();

var numero = parseInt(prompt("Digite um número inteiro: "));

var antecessor = numero - 1;

var sucessor = numero + 1;

console.log(`O número digitado foi: ${numero}`);
console.log(`O antecessor de ${numero} é: ${antecessor}`);
console.log(`O sucessor de ${numero} é: ${sucessor}`);