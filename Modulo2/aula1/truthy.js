function verificarTruthy(valor){
    if(valor){
        console.log(`${valor} é Truthy`)
    } else{
        console.log(`${valor} é Falsy`)
    }
}

verificarTruthy (false)
verificarTruthy (0)
verificarTruthy (NaN)
verificarTruthy (null)
verificarTruthy (undefined)


