// a.Variaveis dos dados do html

let inputPeso = document.getElementById("peso");
let inputAltura = document.getElementById("altura");
let botaoCalcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

// b.Função
  function calcularIMC() {
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

// 1.Mensagem alerta
if (!peso || !altura) {
    alert("Preencha peso e altura corretamente!");
    return;
}

let imc = peso / (altura **2);

// 2.Mostrar o resultado
resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
  }

// c.Ouvinte de evento:
botaoCalcular.onclick = calcularIMC;