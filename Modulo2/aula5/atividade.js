//modificada pela ia pra ficar bonitinho
var anosDeVitoria = [1959, 1962, 1978, 1994, 2002];

console.log("=== Anos de Vitória do Brasil na Copa ===");
for (var i = 0; i < anosDeVitoria.length; i++) {
    console.log(`- O Brasil ganhou a copa de ${anosDeVitoria[i]}`);
}

console.log("\n=== Lista de Frutas (até a Pera) ===");
var frutas = ['Banana','Maça','Pera','Uva','Melância'];
for (var i = 0; i < frutas.length; i++){
    const frutaAtual = frutas[i];
    console.log(`* ${frutaAtual}`);
    if(frutas[i] === 'Pera'){
        break;
    }
}

const ultimaFruta = frutas[frutas.length - 1];
console.log(`\nÚltima fruta da lista: ${ultimaFruta}`);

console.log("\nLista completa de frutas:");
console.log(frutas);
