const prompt = require('prompt-sync')();
/*
peso = parseFloat(prompt("Informe o seu peso: "));

while(true){
    peso= parseFloat(prompt("Informe o seu peso: "))
    if (isNaN(peso) || peso<0){
        console.log("Entrada inválida")
    }else{
        process.exit()
        break; 
    }

}
 do{
    peso = parseFloat(prompt("Informe o seu peso: "))
    if (isNaN(peso) || peso<0){
        console.log("Entrada inválida")
    }
 }while(isNaN(peso) || peso<0)
*/
/*
altura = parseFloat(prompt("Informe a sua altura: " ))

let imc = peso/ (altura*altura)
console.log("O seu peso é: ",  imc)*/
var videoGames = ['ps4', 'xbox', 'switch', 'playstation']

console.log(videoGames.length) //Ver o comprimento do array

for (let i =0; i<videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames === 'xbox'){
        break;
    }
}