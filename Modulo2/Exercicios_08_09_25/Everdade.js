function isTruthy(valor){

    return Boolean(valor);

}

console.log(isTruthy(123))
console.log(isTruthy('123'))
console.log(isTruthy(true))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(false))
console.log(isTruthy(0))
console.log(isTruthy(NaN))
console.log(isTruthy(null))
console.log(isTruthy(undefined))