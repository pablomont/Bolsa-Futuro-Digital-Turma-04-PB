function isTruthy(valor) {
    return !!valor;
}
// Exemplos:
console.log(isTruthy(0))  //false
(false)
console.log(isTruthy(123))  // true
(true)
console.log(isTruthy(""))  //false
(false)
console.log(isTruthy("abc")) //true
(true)
console.log(isTruthy(null)) //false
(false)
console.log(isTruthy(true)) //true
(true)