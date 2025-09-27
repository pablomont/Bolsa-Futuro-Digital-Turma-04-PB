const prompt = require('prompt-sync')();


function valorInvalido(peso, altura) {
    return isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0;
}

let peso;
let altura;


do {
    peso = parseFloat(prompt("Digite seu peso (em kg): "));
    altura = parseFloat(prompt("Digite sua altura (em metros): "));

    if (valorInvalido(peso, altura)) {
        console.log("Valor inválido. 🙄 Tente novamente.");
    }

} while (valorInvalido(peso, altura));


const imc = peso / (altura * altura);


if (imc > 25) 
    console.log("IMC ACIMA DO NORMAL");
else if (imc < 18.5)
    console.log("IMC ABAIXO DO NORMAL")
else 
    console.log("IMC NORMAL")



process.exit();
