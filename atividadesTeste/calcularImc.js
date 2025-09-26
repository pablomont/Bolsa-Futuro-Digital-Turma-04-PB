const prompt = require("prompt-sync") ();

function calcularIMC(peso, altura){
    const imc = peso / (altura * altura);
    return imc;
}

let peso = parseFloat(prompt("Digite o peso: "))
let altura = parseFloat(prompt("Digite a altura: "))

imc = calcularIMC(peso,altura);

if (imc >= 25){
    console.log("IMC acima do normal: " + imc)
}
else{
    console.log("IMC normal: " + imc)
}