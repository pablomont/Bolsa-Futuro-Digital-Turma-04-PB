const prompt = require('prompt-sync')();

function media(nota1, nota2) {
    let mediaFinal = (nota1 + nota2) / 2;

    if (mediaFinal >= 7) {
        return { status: "Aprovado", media: mediaFinal };
    } else if (mediaFinal >= 5 && mediaFinal < 7) {
        return { status: "Recuperação", media: mediaFinal };
    } else {
        return { status: "Reprovado", media: mediaFinal };
    }
}

function valor_invalido(nota) {
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Valor inválido.");
        process.exit();
    }
}

for (let i = 0; i < 3; i++) {
    console.log(`\nAluno ${i + 1}`);

    let nota1 = parseFloat(prompt("Informe nota 1: "));
    valor_invalido(nota1);

    let nota2 = parseFloat(prompt("Informe nota 2: "));
    valor_invalido(nota2);

    const resultado = media(nota1, nota2);
    
    console.log(`Média: ${resultado.media} - ${resultado.status}`);
}

process.exit();
