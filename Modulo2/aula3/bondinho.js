const prompt = require("prompt-sync")();

const alunos = parseInt(prompt("Digite a quantidade de alunos (1 a 50): "));
const monitores = parseInt(prompt("Digite a quantidade de monitores (1 a 50): "));


if (alunos < 1 || alunos > 50 || monitores < 1 || monitores > 50) {
    console.log("Entrada inválida. Os valores devem estar entre 1 e 50.");
} else {
    const totalPessoas = alunos + monitores;

    if (totalPessoas <= 50) {
        console.log("S");
    } else {
        console.log("N");
    }
}