function obterTipoDado(argumento) {
  return typeof argumento;
}

// Exemplos de uso:
var numero = 123;
var texto = "Olá, Mundo!";
var booleano = true;
var lista = [1, 2, 3];
var objeto = { nome: "Exemplo" };
var indefinido;
var nulo = null;

console.log(`O tipo de ${numero} é:`, obterTipoDado(numero));
console.log(`O tipo de "${texto}" é:`, obterTipoDado(texto)); 
console.log(`O tipo de ${booleano} é:`, obterTipoDado(booleano)); 
console.log(`O tipo de [1, 2, 3] é:`, obterTipoDado(lista)); 
console.log(`O tipo de { nome: "Exemplo" } é:`, obterTipoDado(objeto)); 
console.log(`O tipo de indefinido é:`, obterTipoDado(indefinido)); 
console.log(`O tipo de null é:`, obterTipoDado(nulo)); 