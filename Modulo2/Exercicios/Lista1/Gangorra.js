const prompt = require('prompt-sync')();

function gangorra(){

    p1 = parseFloat(prompt("Digite o peso da crianca a esqueda: "))
    c1 = parseFloat(prompt("Digite o comprimento: "))

    p2 = parseFloat(prompt("Digite o peso da crianca a direita: "))
    c2 = parseFloat(prompt("Digite o comprimento: "))


    if ((p1*c1) > (p2*c2)){
        console.log("Gangora desequilibrada para a esquerda")
    } else if ((p1*c1) < (p2*c2)){
        console.log("Gangora desequilibrada para a direita")
    } else{
        console.log("gangorra equilibrada")
    }
}

gangorra()