const prompt=  require('prompt-sync')();

while(true){
    peso = parseFloat(prompt("Informe seu peso (em Kg): "));
    if(isNaN(peso) || peso < 0){
        console.log("Entrada inválida")
    }else{
        process.exit()
        break
        // continue
    }
}
/*do{
    peso = parseFloat(prompt("Informe seu peso (em Kg): "));

    if(isNaN(peso) || peso < 0){
        console.log("Entrada inválida")
    }
    
}while(isNaN(peso) || peso < 0)

altura = parseFloat(prompt("Informe sua altura (em metros): "));

let imc = peso / (altura * altura);
console.log("Seu IMC é: " + imc); */
