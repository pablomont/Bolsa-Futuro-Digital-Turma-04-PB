function InputIMC(){
    let peso = parseFloat(document.getElementById('peso').value);
    CheckValues(peso, "Peso");
    let altura = parseFloat(document.getElementById('altura').value);
    CheckValues(altura, "Altura");

    let imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(){
    let result = document.getElementById('resultado');
    let classificacao = "";
    var imc =InputIMC();

    if(imc > 25){
        classificacao = "acima do peso";
    } else if(imc >0){
        classificacao = "peso normal";
    }
     if(classificacao !== ""){
    result.textContent = `Seu IMC é ${imc.toFixed(2)} e você está no ${classificacao}`
    };
}

document.getElementById('button').addEventListener('click', classificarIMC);

function CheckValues(value, type){
    if (value <= 0 || isNaN(value)){ 
    alert(type + " inválido!")
}   }
