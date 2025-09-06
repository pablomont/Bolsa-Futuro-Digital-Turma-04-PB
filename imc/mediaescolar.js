const prompt = require('prompt-sync')();

let nota1=prompt("Informe a primeira nota: ")
let nota2=prompt("Informe a segunda nota: ")
let media=(nota1+nota2)/2

if (media>7){
    console.log("Você está aprovado. ")
}else if(media<=6.9 && media==5){
    console.log("Você está na recuperação. ")
}else{
    console.log("Você está reprovado.")
}