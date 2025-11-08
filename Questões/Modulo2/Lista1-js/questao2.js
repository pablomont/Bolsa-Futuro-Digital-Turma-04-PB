function isTruthy(valor){
    return !!valor;
}

console.log(isTruthy(0)) //false
console.log(isTruthy(3)) //true
console.log(isTruthy(-0)) //false
console.log(isTruthy(true)) //true
console.log(isTruthy(false)) //false
console.log(isTruthy("Nome aqui")) //true
console.log(isTruthy("")) //false 