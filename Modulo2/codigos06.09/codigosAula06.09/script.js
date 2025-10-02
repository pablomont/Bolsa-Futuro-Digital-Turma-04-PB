let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
let botaoCalcular = document.getElementById("calcular");

function calcularIMC() {
    let p = parseFloat(peso.value);
    let a = parseFloat(altura.value);

    if (isNaN(p)  || isNaN(a) || a <= 0){
        alert("Preencha os campos corretamente");
        return;
    }
    let imc = p / (a * a);
    let padrao = "";

    if (imc >= 25) {
        padrao = "IMC ACIMA DO NORMAL";
    } else {
        padrao = "IMC NORMAL";
    }
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${padrao}`;
}

botaoCalcular.addEventListener("click", calcularIMC);
