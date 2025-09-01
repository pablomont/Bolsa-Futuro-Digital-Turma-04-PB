const prompt = require('prompt-sync')();

let peso = prompt("Digite seu peso (em kg): ")
pesonum = parseFloat(peso)
let Altura = prompt("Digite sua altura (em metros): ")
alturanum = parseFloat(Altura)

imc = pesonum / (alturanum * alturanum)
console.log("Seu imc é:", imc)

if (imc > 25) {
    console.log("IMC ACIMA DO NORMAL")
}
else {
    console.log("IMC NORMAL")
}
process.exit();