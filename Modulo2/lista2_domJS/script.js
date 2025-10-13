let peso = document.getElementById('peso');
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')
let calcular = document.getElementById('calcular')

function calcularImc(){
    let pesoValor = peso.value;
    let alturaValor = altura.value;

     if (pesoValor === '' || alturaValor === '' || pesoValor <= 0 || alturaValor <= 0){
        alert('Entrada inválida, digite os dados novamente');
        return;
    }

    let pesoNumero = Number(pesoValor);
    let alturaNumero = Number(alturaValor);

    let imc = pesoNumero/(alturaNumero*alturaNumero);

    if (imc>25){
        resultado.innerHTML = 'IMC ACIMA DO NORMAL: ' +imc.toFixed(2);
        resultado.style.color = 'red';
    }else{
        resultado.innerHTML = 'IMC NORMAL: ' +imc.toFixed(2);
        resultado.style.color = 'green';
    }    
}
calcular.onclick = calcularImc;