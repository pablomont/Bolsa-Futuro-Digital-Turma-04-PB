// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Pergunta os dados do usuário
const nota1 = parseFloat(prompt("Informe a nota 1: "));
const nota2 = parseFloat(prompt("Informe a nota 2: "));

// Nota 1 e Nota 2 são os parâmetros
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media;
}

let media = calcularMedia(nota1, nota2);

// Mostra o resultado
console.log(`Sua media é ${media}`);

// Aprovação

if (media >= 7) {
    console.log("Aprovado\n");
} else if (media >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}
