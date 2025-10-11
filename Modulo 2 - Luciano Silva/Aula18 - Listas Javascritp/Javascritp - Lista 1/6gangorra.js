// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Pergunta os dados do usuário
const p1 = parseFloat(prompt("Informe seu P1: "));
const c1 = parseFloat(prompt("Informe sua C1: "));
const p2 = parseFloat(prompt("Informe sua P2: "));
const c2 = parseFloat(prompt("Informe sua C2: "));

//// Função de equilibrio da gangorra
function calcular(p1, p2, c1, c2){
if (p1 * c1 === p2 * c2) return "Gangorra EQUILIBRADA";
else if (p1 * c1 < p2 * c2) return "Desequilibrado para ESQUERDA";
else return "Desequilibrado para DIREITA";
}

//Restriição
function restricao(p1, p2, c1,c2) 
{if ( p1 >= 10 && p1 <= 100 && p2 >= 10 && p2 <= 100 && c1 >= 10 && c1 <= 100 && c2 >= 10 && c2 <= 100)
{return calcular (p1, p2, c1, c2);}
else {return "erro: todos os valores devem estar entre 10 e 100";}}

// Mostra o resultado
console.log(restricao(p1, p2, c1, c2));