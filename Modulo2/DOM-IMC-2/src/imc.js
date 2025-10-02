let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let button = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function displayImc(value){
    let cor = '';
    let classificacao = '';

    if (value < 18.5) {
        // Abaixo do peso
        cor = 'blue';
        classificacao = 'Abaixo do Peso';
    } else if (value >= 18.5 && value <= 24.9) {
        // Peso Normal
        cor = 'green';
        classificacao = 'Peso Normal';
    } else if (value >= 25 && value <= 29.9) {
        // Sobrepeso
        cor = '#FFD700'; // Um amarelo/dourado
        classificacao = 'Sobrepeso';
    } else if (value >= 30 && value <= 34.9) {
        // Obesidade Grau I
        cor = 'orange';
        classificacao = 'Obesidade Grau I';
    } else if (value >= 35 && value <= 39.9) {
        // Obesidade Grau II
        cor = 'red';
        classificacao = 'Obesidade Grau II';
    } else {
        // Obesidade Grau III
        cor = 'darkred';
        classificacao = 'Obesidade Grau III';
    }


    resultado.style.color = cor;
    resultado.innerHTML = `Seu IMC é: <strong>${value.toFixed(2)}</strong> (${classificacao})`;
}
function calcularIMC(massa, tamanho){
    massa = parseFloat(massa);
    if( massa < 0 || isNaN(massa) ){
        alert("Entrada inválida");
    }
    tamanho = parseFloat(tamanho);
    if( tamanho < 0 || isNaN(tamanho) ){
        alert("Entrada inválida");
    }
    let value = massa / tamanho ** 2;
    resultado.innerHTML = value.toFixed(2);
    displayImc(value);
}


button.onclick = function(){
    calcularIMC(peso.value, altura.value);
};