const prompt = require('prompt-sync')();

var valorOriginal = parseFloat(prompt("Digite um valor qualquer: "));

if (isNaN(valorOriginal)) {
    console.log("Por favor, digite um valor numérico válido.");
} else {
    
    var reajuste = valorOriginal * 0.05; 
    let valorReajustado = valorOriginal + reajuste;


    console.log(`O valor original era: ${valorOriginal.toFixed(2)}`);
    console.log(`O reajuste de 5% é: ${reajuste.toFixed(2)}`);
    console.log(`O valor com reajuste de 5% é: ${valorReajustado.toFixed(2)}`);
}