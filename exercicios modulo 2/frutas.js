var frutas=['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']; 


for (i=0; i<frutas.length; i++){
    console.log(`A fruta é ${frutas[i]}`)
    if(frutas[i] === 'Pera'){
        break;
    }
}
let variavel=frutas[frutas.length-1];

console.log(variavel);