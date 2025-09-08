const prompt = require('prompt-sync')();

let primeiroNumeroStr = prompt("Insira o primeiro número: ")
let segundooNumeroStr = prompt("Insira o segundo número: ")
let operacao = prompt("Digite a operação matemática  (+, -, *, /): ")

const primeiroNumero = parseFloat(primeiroNumeroStr.replace(",", "."));
const segundoNumero = parseFloat(segundooNumeroStr.replace(",", "."));

if ( operacao === "+" ){
    resultado = primeiroNumero + segundoNumero;
  }  else ( operacao === "-"){
    resultado = primeiroNumero - segundoNumero;
  }
