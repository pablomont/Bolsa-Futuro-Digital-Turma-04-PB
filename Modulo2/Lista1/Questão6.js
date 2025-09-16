const prompt = require('prompt-sync')();





function valor_invalido(peso) {
    if (isNaN(peso) || peso < 10 || peso > 100) {
        console.log(`valor ${ peso } não suportado 🙄`);
        process.exit();
    }
}

let P1 = parseInt(prompt("Informe o P1: "));
    valor_invalido(P1)
let C1 = parseInt(prompt("Informe o C1: "));
    valor_invalido(C1)
let P2 = parseInt(prompt("Informe o P2: "));
    valor_invalido(P2)
let C2 = parseInt(prompt("Informe o C2: "));
    valor_invalido(C2)

let equi = (P1 * C1) - (P2 * C2)

if (equi === 0)
    console.log("Gangorra equilibrada 😃")
else if (equi > 0)
    console.log("Gangorra desequilibrada para a esquerda 😭")
else
    console.log("Gangorra desequilibrada para a direita 😭")
