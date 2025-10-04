
function valorInvalido(peso, altura) {
    return isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0;
}
document.getElementById("calcular").addEventListener("click", function () {
const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);
const resultado =document.getElementById("resultado");

if (valorInvalido(peso, altura)) {
        alert("Por favor, insira valores válidos.")
        return;
}

const imc =peso/ (altura *altura);


if (imc > 25) 
    resultado.textContent ="IMC ACIMA DO NORMAL"
else if (imc < 18.5)
    resultado.textContent ="IMC ABAIXO DO NORMAL"
else 
    resultado.textContent ="IMC NORMAL"

}

)
