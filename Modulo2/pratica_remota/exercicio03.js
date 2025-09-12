
const prompt = require('prompt-sync')();

var A = parseInt(prompt("Digite o valor inteiro de A: "));
var B = parseInt(prompt("Digite o valor inteiro de B: "));

var C; 

if (A === B) {
    C = A + B;
    
    console.log("Os valores de A e B são iguais. A soma será realizada.");
} else {
    
    C = A * B;
    console.log("Os valores de A e B são diferentes. A multiplicação será realizada.");
}

console.log(`O valor final de C é: ${C}`);