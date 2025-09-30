const prompt = require('prompt-sync')();

function lerInteiro(mensagem){
    const entrada = prompt(mensagem)
    const numero = parseInt(entrada)
    if (isNaN(numero) || numero < 10 || numero > 100){
        console.log(`Valor ${entrada} não suportado. O programa será encerrado.`);
        process.exit();
    }
    return numero;
}

const P1 = lerInteiro("Digite P1: ");
const C1 = lerInteiro("Digite C1: ");
const P2 = lerInteiro("Digite P2: ");
const C2 = lerInteiro("Digite C2: ");

if (P1 * C1 === P2 * C2) {
    console.log("A gangorra está equilibrada.");
} else if (P1 * C1 > P2 * C2) {
    console.log("A gangorra está desequilibrada para a esquerda.");
} else {
    console.log("A gangorra está desequilibrada para a direita.");
}