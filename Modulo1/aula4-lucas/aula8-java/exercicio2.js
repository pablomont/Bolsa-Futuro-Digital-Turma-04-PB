function isTruthy(valor) {
  return !!valor; 
}
// Exemplos de uso:
console.log(isTruthy(10));         // Saída: true (10 é truthy)
console.log(isTruthy("Olá"));      // Saída: true ("Olá" é truthy)
console.log(isTruthy([1, 2]));     // Saída: true (um array não vazio é truthy)
console.log(isTruthy(true));       // Saída: true (true é truthy)
console.log(isTruthy(false));      // Saída: false (false é falsy)
console.log(isTruthy(0));          // Saída: false (0 é falsy)
console.log(isTruthy(""));         // Saída: false ("" (string vazia) é falsy)
console.log(isTruthy(null));       // Saída: false (null é falsy)
console.log(isTruthy(undefined));  // Saída: false (undefined é falsy)
console.log(isTruthy(NaN));        // Saída: false (NaN é falsy)