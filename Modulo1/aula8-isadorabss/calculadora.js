const prompt = require('prompt-sync')();

let num1 = prompt("Número 1: ");
let num1Num = parseFloat(num1);

let num2 = prompt("Número 2: ");
let Num2Num = parseFloat(num2);

let operador = prompt("Operador: ");

if (operador == "+"){
    let resposta = (num1Num + Num2Num);
    console.log("Soma: ", resposta);
} else if (operador == "-"){
    let resposta = num1Num - Num2Num;
    console.log("Subtração: ", resposta);
} else if (operador == "*"){
    let resposta = num1Num * Num2Num;
    console.log("Multiplicação: ", resposta);
} else if (operador == "/"){
    let resposta = num1Num / Num2Num;
    console.log("Divisão: ", resposta);
}

process.exit();