const prompt = require("prompt-sync") ();

function calcularIMC(peso, altura){
    return imc = peso / (altura * altura);
}

let entradaPeso = prompt("Digite o peso: ");
let numero = parseFloat(entradaPeso);

let entradaAltura = prompt("Digite a altura: ")
let numero2 = parseFloat(entradaAltura);

imc = calcularIMC(numero,numero2);

if (imc >= 25){
    console.log("IMC acima do normal.")
}
else{
    console.log("IMC normal")
}

process.exit();