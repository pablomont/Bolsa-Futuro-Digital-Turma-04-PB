const prompt = require('prompt-sync')();

var numero = parseFloat(prompt("Digite um número: "));

if (numero > 0) {
    console.log(`O número ${numero} é POSITIVO.`);
} else if (numero < 0) {
    console.log(`O número ${numero} é NEGATIVO.`);
} else {
    console.log(`O número ${numero} é ZERO.`); 
}
if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`);
} else {
    console.log(`O número ${numero} é ÍMPAR.`);
}