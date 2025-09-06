const prompt = require('prompt-sync')();

let dia = parseInt(prompt("Informe o dia da semana: "));

switch (dia) {
    case 1: segunda
    case 2: terça
    case 3: quarta
    case 4: quinta
    case 5: sexta
        console.log("Dia útil");
        break;node
    case 6: sábado
    case 7: domingo
        console.log("Final de semana");
        break;
    default:
        console.log("Dia inválido! Digite um número de 1 a 7.");
}




