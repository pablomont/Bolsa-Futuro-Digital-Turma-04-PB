let peso = document.getElementById("peso")
let altura = document.getElementById("altura")
let botao = document.getElementById("btn-calcular")

function calcularIMC(){

    let valorPeso = parseFloat(peso.value);
    let valorAltura = parseFloat(altura.value);

    const resultado = document.getElementById("resultado")

    if(isNaN(valorPeso) || valorPeso <= 0){
        alert("Entrada inválida. Digite os dados novamente.")
        return
    }

    if(isNaN(valorAltura) || valorAltura <= 0){
        alert("Entrada inválida. Digite os dados novamente.")
        return
    }

    const imc = valorPeso / (valorAltura * valorAltura);

    if(imc > 25){
        resultado.style.color = 'red'
        resultado.textContent = `IMC acima do normal: ${imc.toFixed(2)}.`
    }
    else{
        resultado.style.color = 'green'
        resultado.textContent = `IMC normal: ${imc.toFixed(2)}.`
    } 
}

botao.onclick = calcularIMC;