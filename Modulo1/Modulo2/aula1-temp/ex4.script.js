function VerificarTipo (dado){
    return typeof dado;
}
console.log(VerificarTipo(23));
console.log(VerificarTipo(true));
console.log(VerificarTipo({}))
console.log(VerificarTipo([]))
console.log(VerificarTipo(undefined))
console.log(VerificarTipo(null))
