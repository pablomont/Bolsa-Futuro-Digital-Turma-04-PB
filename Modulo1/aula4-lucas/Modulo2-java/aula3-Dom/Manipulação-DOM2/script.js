
let campoPeso = document.getElementById("peso");
let campoAltura = document.getElementById("altura");
let botaoCalcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");


function calcularIMC() {
  let peso = parseFloat(campoPeso.value);
  let altura = parseFloat(campoAltura.value);

 
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    resultado.textContent = "";
    return;
  }

  let imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 39.9) {
    classificacao = "Obesidade";
  } else {
    classificacao = "Obesidade grave";
  }

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}


botaoCalcular.addEventListener("click", calcularIMC);
