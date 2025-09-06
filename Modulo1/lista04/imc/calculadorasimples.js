const prompt=require('prompt-sync')(); 
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))
let operador= prompt("Informe a operação a ser feita: ")
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
    console.log("Operação inválida. ")
}

console.log("O resultado da operação escolhida foi:", resultado)
process.exit();
