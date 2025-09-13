function printResult() {
    console.log("Entrou em printResult");
    const res = multiply(3,2);
    console.log("Entrou em printResult");
    console.log(res);
}

function multiply(a, b) {
    console.log("Entrou em multiply");
    return a * b;
}

printResult();