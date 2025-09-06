const prompt = require('prompt-sync')();

let peso = prompt("Digite o seu peso:  ")
let altura = prompt("Digite a sua altura: ")
let imc = peso/(altura*altura)
console.log("O resultado do seu imc foi: ", imc)

if(imc>25){
    console.log("Imc acima do normal")
}else{
    console.log("Imc normal")
}