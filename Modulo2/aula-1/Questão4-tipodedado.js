function tipoDeDado(valor) {
  return typeof valor;
}

// Exemplos de uso:
console.log(tipoDeDado(10));         // Saída: "number"
console.log(tipoDeDado("Olá"));      // Saída: "string"
console.log(tipoDeDado(true));       // Saída: "boolean"
console.log(tipoDeDado({}));         // Saída: "object"
console.log(tipoDeDado(undefined));  // Saída: "undefined"
console.log(tipoDeDado(null));       // Saída: "object" (bug do JavaScript)
console.log(tipoDeDado(() => {}));   // Saída: "function"