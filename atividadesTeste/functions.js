function printResult(){
    console.log("Entrou em printResult")
    const res = multiply(3,2)
    console.log("saiu de multiply")
    console.log(res)
    console.log("saiu de printResult")

}

function multiply(num1, num2){
    console.log("Entrou em multiply")
    return num1 * num2;
}
printResult()