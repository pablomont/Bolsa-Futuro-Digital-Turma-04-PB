const prompt = require('prompt-sync')();

function ParImpar(num){
    if(num % 2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
}

num = parseInt(prompt("Digite um numero: "))
console.log(`O numero ${num} eh:`, ParImpar(num))