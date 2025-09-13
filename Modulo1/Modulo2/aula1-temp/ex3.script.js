function verificarPar(numero) {
    if(numero % 2 === 0) {
        return numero + " é par";
    }else {
        return numero + " é impar";
    }
}
console.log(verificarPar(10));
console.log(verificarPar(7));
console.log(verificarPar(4));