const prompt=require('prompt-sync')(); 
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))
let operador= prompt("Digite a operação (+,-,*, ou /): ")
let resultado

if (operador === '+'){
    resultado = numero1 + numero2
} else if(operador === '-'){
    resultado = numero1 - numero2
} else if(operador === '/'){
    resultado = numero1 / numero2
} else if (operador === '*'){
    resultado = numero1 * numero2
} else {
    console.log("Operação inválida. Por favor,  use +, -, * ou /.")
}

console.log("O resultado da operação escolhida foi:", resultado)

