/*
var corFavorita = "azul"

switch(corFavorita) {
    case "verde":
    case "azul":
        console.log("Olhe para o céu ou para árvore")
        break;
    case "Vermelho":
        console.log("Olhe para rosas")
        break;
    case "Amarelo":
        console.log("Olhe para o sol")
        break;
    default:
            console.log("feche os olhos")
} */

const prompt = require('prompt-sync')();

let dia = prompt("Informe o dia da semana (Segunda - 1; Terça -2; Quarta - 3; Quinta - 4; Sexta - 5; Sábado - 6; Domingo - 7): ");

switch(dia) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        console.log("Dia útil")
        break;
    case "6":
    case "7":
        console.log("Final de semana")
        break;
    default:
            console.log("Erro! Tente novamente.")
}