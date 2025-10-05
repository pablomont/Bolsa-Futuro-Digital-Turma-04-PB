let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resultado = document.getElementById('resultado');
let calcular = document.getElementById('calcular');

function calcularImc() {
    if (isInvalidInput(peso.value) || isInvalidInput(altura.value)) {
        alert('Entrada inválida. Digite valores válidos de peso e altura.');
        return;
    }

    let pesoValue = parseFloat(peso.value);
    let alturaValue = parseFloat(altura.value);
    let imc = pesoValue / (alturaValue * alturaValue);
    let mensagem = '';
    let cor = '';

    if (imc < 18.5) {
        mensagem = `IMC ABAIXO DO NORMAL: ${imc.toFixed(2)}`;
        cor = 'orange';
    } else if (imc <= 25) {
        mensagem = `IMC NORMAL: ${imc.toFixed(2)}`;
        cor = 'green';
    } else {
        mensagem = `IMC ACIMA DO NORMAL: ${imc.toFixed(2)}`;
        cor = 'red';
    }

    resultado.innerHTML = mensagem;
    resultado.style.color = cor;
}

function isInvalidInput(entrada) {
    const valor = entrada.trim();
    return (valor === '' || isNaN(valor) || parseFloat(valor) <= 0);
}

calcular.onclick = calcularImc;