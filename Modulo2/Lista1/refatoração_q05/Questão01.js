const prompt = require('prompt-sync')();

function validarNota(nota) {
    if(nota < 0 || nota > 10) {
        return 'Nota inválida';
}
    return nota;
}
let entrada1 =prompt("Digite a primeira nota: ");
let nota1 = parseFloat(entrada1);
let notaValidada1 = validarNota(nota1);

if (typeof notaValidada1 === 'string') {
    console.log(notaValidada1)
} else {
    console.log(`A primeira nota (${notaValidada1}) é válida.`);
}

let entrada2 = prompt("Digite a segunda nota: ");
let nota2 = parseFloat(entrada2);
let notaValidada2 = validarNota(nota2);

if (typeof notaValidada2 === 'string') {
    console.log(notaValidada2);
} else {
    console.log(`A segunda nota (${notaValidada2}) é válida.`);
}

if (typeof notaValidada1 !== 'string' && typeof notaValidada2 !== 'string'); {
    let media = (notaValidada1 + notaValidada2) / 2;
    console.log(`Média calculada: ${media.toFixed(2)}`);
}
