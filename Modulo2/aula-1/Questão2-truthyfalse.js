function isTruthy(valor) {
    return Boolean(valor)
}

console.log(isTruthy(true));       // true
console.log(isTruthy(1));          // true
console.log(isTruthy("Olá"));      // true
console.log(isTruthy([]));         // true
console.log(isTruthy({}));         // true

console.log(isTruthy(false));      // false
console.log(isTruthy(0));          // false
console.log(isTruthy(""));         // false
console.log(isTruthy(null));       // false
console.log(isTruthy(undefined));  // false
console.log(isTruthy(NaN));        // false 