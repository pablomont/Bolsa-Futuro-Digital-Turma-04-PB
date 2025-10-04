let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')
let calcular = document.getElementById('calcular')

function calcularImc(){

    if(isInvalidInput(peso.value) || isInvalidInput(altura.value)){
        alert('Entrada inválida, digite os dados novamente')
        return
    }

    let pesoValue = parseFloat(peso.value)
    let alturaValue = parseFloat(altura.value)

    let imc = pesoValue / (alturaValue * alturaValue);

    if(imc > 25){
        imc = `IMC ACIMA DO NORMAL: ${imc.toFixed(2)}`
        resultado.style.color = 'red'
    }
    else{
         imc = `IMC NORMAL: ${imc.toFixed(2)}`
         resultado.style.color = 'green'
    }

    resultado.innerHTML = imc
}

function isInvalidInput(entrada){
    return (isNaN(entrada) || entrada < 0 || entrada === '')
}

calcular.onclick = calcularImc
