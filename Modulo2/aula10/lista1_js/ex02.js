function TestaTruthy(valor){
    if(valor){
        return "Truthy"
    }else{
        return "Falsy"
    }}

    console.log(TestaTruthy(-0))
    console.log(TestaTruthy(null))
    console.log(TestaTruthy(NaN))
    console.log(TestaTruthy(0))
    console.log(TestaTruthy(undefined))
    console.log(TestaTruthy(''))
    console.log(TestaTruthy(""))
    console.log(TestaTruthy(``))
    console.log(TestaTruthy(1))






