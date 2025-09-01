const prompt = require('prompt-sync')();

let num1 = prompt("Informe o 1° número : ")
num1num = parseFloat(num1)
let num2 = prompt("Informe o 2° número : ")
num2num = parseFloat(num2)
let operacao = prompt("Digite a operação (+, -, *, /): ")

if (operacao=="+"){
    resultado=num1num+num2num
}
else if (operacao=="-"){
    resultado=num1num-num2num
}
else if (operacao=="*"){
    resultado=num1num*num2num
}
else if (operacao=="/"){
    resultado=num1num/num2num
}

console.log("O resultado é: ",resultado)