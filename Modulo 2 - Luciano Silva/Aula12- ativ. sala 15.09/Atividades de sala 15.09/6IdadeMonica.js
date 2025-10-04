const prompt = require('prompt-sync')();

// Entrada

const M = parseFloat(prompt("Idade de Mônica: "));
const A = parseFloat(prompt("Idade do filho 1: "));
const B = parseFloat(prompt("Idade do filho 2: "));

// Função
function calcularValor(M, A, B) {
    const C = M -(A + B) ;
    return C;
}

let C = calcularValor(M, A, B);


// Saida e Alerta
if (M >= 49 && M <= 110 && A >= 1 &&  A < M && B >= 1 &&  B < M &&  A !== B) {
    const maisVelho = Math.max(A, B, C);
    console.log(`A idade do filho mais velho é ${maisVelho}`);
} else {
    console.log("Entrada Invalida\n");
    process.exit();
}