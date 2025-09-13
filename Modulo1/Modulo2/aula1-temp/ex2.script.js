function isTruthy(valor){
    return !!valor;
}
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(false));
console.log(isTruthy(0));
console.log(isTruthy(123));
console.log(isTruthy("mariana"));
console.log(isTruthy({}));
console.log(isTruthy([]));
