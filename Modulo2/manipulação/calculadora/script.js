const campoPeso = document.getElementById('peso');
const campoAltura = document.getElementById('altura');
const botaoCalcular = document.getElementById('botao-calcular');
const areaResultado = document.getElementById('resultado');

botaoCalcular.addEventListener('click', calcularIMC);

function calcularIMC() {

    const valorPeso = campoPeso.value.replace(',', '.');
    const valorAltura = campoAltura.value.replace(',', '.');

    const peso = parseFloat(valorPeso); 
    const altura = parseFloat(valorAltura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Entrada inválida. Por favor, insira valores numéricos e positivos.");
        areaResultado.textContent = "Resultado:"; 
        return; 
    }

    const imc = peso / (altura * altura);

    areaResultado.textContent = "Resultado: " + imc.toFixed(2);
}