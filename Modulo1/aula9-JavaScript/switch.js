/*
let corFavorita = "Verde";

switch (corFavorita){
    case "Verde":
    case "Azul":
        console.log("Olhe para o céu");
        break;
    case "Vermelho":
        console.log("Olhe para rosas");
        break;
    case "Amarelo":
        console.log("Olhe para o céu");
        break;
    default:
        console.log("Feche os olhos");
        break;
}
*/ 

const prompt = require('prompt-sync')();
diaDaSemana = parseInt(prompt("Informe o dia da semana: "))

switch (diaDaSemana) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia útil")
        break
    case 6:
    case 7:
        console.log("Final de Semana")
        break
    default:
        console.log("Não é um dia da semana")
}