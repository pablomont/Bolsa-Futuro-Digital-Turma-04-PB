
var copasDoBrasil = [1958, 1962, 1970, 1994, 2002];


for (var i = 0; i < copasDoBrasil.length; i++) {
  console.log(`O Brasil ganhou a copa de ${copasDoBrasil[i]}`);
}


var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];
console.log('Última fruta:', ultimaFruta);
