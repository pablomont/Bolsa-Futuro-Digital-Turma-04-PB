const prompt = require("prompt-sync")()

function readValues(){
    const peso = parseFloat(prompt("Insira o seu peso (em KG):"))
    const altura = parseFloat(prompt("Insira sua altura (em Metros): "))
    return { peso, altura } 
}

function calcularIMC(peso, altura){
    const imc = peso / altura ** 2
    return imc
}

function displayValues(imc) {
    console.log(`seu IMC no presente momento é: ${imc}`)
}

let values = readValues()
imc = calcularIMC(values.peso, values.altura)
displayValues(imc)

