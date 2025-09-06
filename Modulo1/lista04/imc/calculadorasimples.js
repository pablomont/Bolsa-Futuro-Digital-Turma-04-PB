const prompt=require('prompt-sync')(); 
let numero1=prompt("Informe o primeiro número: ")
let numero2=prompt("Informe o segundo número: ")
let operacao=prompt("Informe a operação a ser feita: ")
let resultado

if (operacao === '+'){
    resultado = numero1+numero2
}else if(operacao === '-'){
    resultado = numero1-numero2
}else if(operacao === '/'){
    resultado = numero1/numero2
}else if (operacao === '*'){
    resultado = numero1*numero2
}else{
    console.log("Operação inválida. ")
}
processo.exit();
console.log("O resultado da operação escolhida foi: ", resultado)
