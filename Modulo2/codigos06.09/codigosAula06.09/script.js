const prompt = require('prompt-sync')();

let diaDaSemana = parseInt(prompt("Informe o dia da semana (1 a 7): "));

switch (diaDaSemana) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia útil.");
        break;
    case 6:
    case 7:
        console.log("Fim de semana.");
        break;
    default:
        console.log("Insira um dado válido.");
}
