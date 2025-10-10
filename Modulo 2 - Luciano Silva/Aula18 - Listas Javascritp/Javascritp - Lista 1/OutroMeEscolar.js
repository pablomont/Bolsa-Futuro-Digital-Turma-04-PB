//Versão longa do Calculo de Media Escolar

// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Pergunta os dados do usuário
const nota1 = parseFloat(prompt("Informe a nota 1: "));
const nota2 = parseFloat(prompt("Informe a nota 2: "));

const nota3 = parseFloat(prompt("Informe a nota 3: "));
const nota4 = parseFloat(prompt("Informe a nota 4: "));

const nota5 = parseFloat(prompt("Informe a nota 5: "));
const nota6 = parseFloat(prompt("Informe a nota 6: "));

// Nota 1 e Nota 2 são os parâmetros
function calcularMedia(nota1, nota2, nota3, nota4,nota5, nota6) {
    const media1 = (nota1 + nota2) / 2;
    const media2 = (nota3 + nota4) / 2;
    const media3 = (nota5 + nota6) / 2;
    return media1, media2, media3;
}

let media1 = calcularMedia(nota1, nota2);
let media2 = calcularMedia(nota3, nota4);
let media3 = calcularMedia(nota5, nota6);

// Mostra o resultado
console.log(`Sua media é ${media1}`);
console.log(`Sua media é ${media2}`);
console.log(`Sua media é ${media3}`);

// Aprovação

if (media1 >= 7) {
    console.log("Aprovado\n");
} else if (media1 >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}

if (media2 >= 7) {
    console.log("Aprovado\n");
} else if (media2 >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}

if (media3 >= 7) {
    console.log("Aprovado\n");
} else if (media3 >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}