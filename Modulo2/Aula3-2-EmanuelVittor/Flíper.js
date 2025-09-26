function fliper (P, R){

    if (P === 0){
        return "C"
    }
    else if (P === 1 && R === 0){
            return "B"
        }
    else if (P === 1 && R === 1){
            return "A"
        }
}

const resultado = fliper (1, 0)
console.log (resultado)