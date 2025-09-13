const prompt = require('prompt-sync')();

function validaFuncao(valor){
    if (valor<10 || valor>100){
        console.log(`O valor ${valor} não é válido`)
        process.exit();
    }
}


var p1 = prompt("Informe o peso da pessoa no lado esquerdo da balança: ")
var peso1=Number(p1)
validaFuncao(peso1)
var p2 = prompt("Informe o peso da pessoa no lado direito da balança: ")
var peso2=Number(p2)
validaFuncao(peso2)
var c1 = prompt("Informe o comprimento do lado 1: ")
var cpm1 = Number(c1)
validaFuncao(cpm1)
var c2 = prompt("Informe o segundo comprimento: ")
var cpm2 = Number(c2) 
validaFuncao(cpm2)


var res1
var res2

if (p1 >= 10 && p1 <= 1000 && p2 >= 10 && p2 <= 1000 && c1 >= 10 && c1 <= 1000 && c2 >= 10 && c2 <= 1000){
    res1 = c1*p1
    res2 = c2*p2 

    if (res1==res2){
        console.log("Gangorra equilibrada")
    } else if (res1>res2){
        console.log("Gangorra desequilibrada para ESQUERDA")
    } else if (res1<res2){
        console.log("Gangorra desequilibrada para DIREITA")
    }
}else{
    console.log("O valor digitado não é suportado")
    process.exit();
}

