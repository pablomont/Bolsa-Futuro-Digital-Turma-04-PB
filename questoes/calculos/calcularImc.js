const prompt = require("prompt-sync") ();

function calcularIMC(peso, altura){
    return imc = peso / (altura * altura);
}

do{
    peso = parseFloat(prompt("Informe seu peso:"))
    if((isNaN(peso) || peso < 0)){
        console.log("Entrada inválida.")
    }
}
while (isNaN(peso) || peso < 0)

let altura = parseFloat(prompt("Digite a altura: "));

imc = calcularIMC(peso,altura);

if (imc >= 25){
    console.log("IMC acima do normal.")
}
else{
    console.log("IMC normal")
}