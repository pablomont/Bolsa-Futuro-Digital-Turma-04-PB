const prompt= require("prompt-sync")();

function Par(numero){
    if (numero%2===0){
        return true;
    }else{
        return false;
    }
}

var numero=prompt("Informe um número para verificar se é par: ")

console.log("O número é par? ", Par(numero));