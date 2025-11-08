let botaoCalcular = document.getElementById("botaoCalcular")
let peso = document.getElementById("peso")
let altura = document.getElementById("altura")

function calcularIMC(){
    let pesoInput = parseFloat(peso.value)
    let alturaInput = parseFloat(altura.value)

    const imc = pesoInput / (alturaInput * alturaInput)
    const resultado = document.getElementById("result")

    if((isNaN(pesoInput) || pesoInput <= 0 || isNaN(alturaInput) || alturaInput <= 0)){
        alert("Entrada inválida. Digite novamente.")
        return
    }
 
    resultado.style.fontSize = "24px"
    resultado.style.fontWeight = "bold"

    if (imc >= 25){
        resultado.style.color = "red"
        resultado.textContent = `IMC ACIMA DO NORMAL: ${imc.toFixed(2)}`
    }
    else if (imc >= 18.5 && imc <= 24.9){
        resultado.style.color = "green"
        resultado.textContent = `IMC NORMAL: ${imc.toFixed(2)}`
    }
    else {
        resultado.style.color = "red"
        resultado.textContent = `IMC ABAIXO DO NORMAL: ${imc.toFixed(2)}`
    }
}
botaoCalcular.onclick = calcularIMC;
