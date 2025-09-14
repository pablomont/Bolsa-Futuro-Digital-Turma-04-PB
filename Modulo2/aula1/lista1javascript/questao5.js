const prompt = require("prompt-sync")();

//validar a nota
function validarNota(nota){
    if(isNaN(nota) || nota < 0 || nota > 10){
        console.log("Nota inválida. Digite uma nota entre 0 e 10.");
        process.exit();
    }
}
// calcular a media
function calcularMedia(n1,n2){
    return (n1 + n2) / 2;

}
//situação do aluno
function verSituacao(media){
    if(media >= 7){
        return "Aprovado(a)";
    } else if(media >= 5){
        return "Recuperação";
    } else {
        return "Reprovado(a)"
    }
}
//processar aluno c/ nome, digitar notas
function aluno(){
    const nome = prompt("Digite o nome do aluno(a): ");

    console.log(`\nAluno: ${nome}`);

    const nota1 = parseFloat(prompt("Digite a nota 1: "));
    validarNota(nota1);

    const nota2 = parseFloat(prompt("Digite a nota 2: "));
    validarNota(nota2);

    const media = calcularMedia(nota1, nota2);
    const situacao = verSituacao(media);

    console.log(`Média: ${media.toFixed(2)} - ${situacao}`);
}
//chamar a função aluno
aluno();
aluno();
aluno(); 

/* console.log("Sistema de Notas");

let nota1 = parseFloat(prompt("nota 1: "))
let nota2 = parseFloat(prompt("Nota 2: "))

let media = (nota1 + nota2) / 2;

if(media >= 7){
    console.log("Aprovado(a)");
} else if(media >= 5){
    console.log("Recuperação");
} else {
     console.log("Reprovado(a)");
} */