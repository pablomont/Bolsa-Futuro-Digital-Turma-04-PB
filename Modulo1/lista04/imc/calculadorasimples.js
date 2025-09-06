const prompt=require('prompt-sync')(); 
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))
if (isNaN(numero1)){
    console.log("Erro {} não é um número válido", numero1)
    process.exit();
}
if(isNaN(numero2)){
    console.log("Erro: {} Não é um número válido")
    process.exit();
}
let operador= prompt("Digite a operação (+,-,*, ou /): ")
let resultado

if (operador === '+'){
} else if(operador === '-'){
    resultado = numero1 - numero2
} else if(operador === '/'){
    if(numero2===0){
        console.log("Erro: Não é possível dividir por zero.")

    }else{
    resultado = numero1 / numero2
    }
} else if (operador === '*'){
    resultado = numero1 * numero2
} else {
    console.log("Operação inválida. Por favor,  use +, -, * ou /.")
}

console.log("O resultado da operação escolhida foi:", resultado)
