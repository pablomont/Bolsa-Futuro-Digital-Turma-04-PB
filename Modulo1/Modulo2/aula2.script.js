function printResult(){
    console.log("entrou em printResult")
    const res = multiply(3,2)
    console.log("entrou em printResult")
    console.log(res)
}

function multiply(num1,num2){
    console.log("entrou em multiply")
    return num1*num2
}

printResult()