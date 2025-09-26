const prompt = require("prompt-sync") ();

let diaInput = prompt("Digite o dia da semana:")
let diaDaSemana = parseFloat(diaInput)

switch (diaDaSemana){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia útil.")
        break
    case 6:
    case 7:
        console.log("Final de semana.")
        break
    default :
        console.log("Dia inválido.")
}