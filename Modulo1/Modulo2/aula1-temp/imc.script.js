function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    return `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
console.log(calcularIMC(70, 1.75));