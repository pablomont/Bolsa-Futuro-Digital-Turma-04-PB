const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Informe o primeiro número: '));
let num2 = parseFloat(prompt('Informe o segundo número: '));

if(isNaN(num1) || isNaN(num2)){
    console.log("Erro: um ou mais valores são inválidos.");
}

else{

    let operacao = prompt('\n----- OPERAÇÕES -----\n- Soma (+)\n- Subtração (-)\n- Multiplicação (*)\n- Divisão (/)\n--------------------\n\nInforme a operação a ser realizada: \n')

    switch (operacao){

        case '+':

            let soma = num1 + num2;
            console.log(num1.toFixed(2),'+', num2.toFixed(2),'=', soma.toFixed(2));
            break;

        case '-':

            let sub = num1 - num2;
            console.log(num1.toFixed(2),'-', num2.toFixed(2),'=', sub.toFixed(2));
            break;
    
        case '*':

            let multi = num1 * num2;
            console.log(num1.toFixed(2),'*', num2.toFixed(2),'=', multi.toFixed(2));
            break;

        case '/':

            if(num2 === 0){

                console.log("Erro: Não é possível dividir por 0.")
            }
            else{

                let div = num1 / num2;
                console.log(num1.toFixed(2),'/', num2.toFixed(2),'=', div.toFixed(2));

            }
            break;
    
        default:
    }
}