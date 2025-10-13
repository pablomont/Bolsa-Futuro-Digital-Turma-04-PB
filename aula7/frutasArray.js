var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'melancia']

for (let i = 0; i <frutas.length; i++) {
    console.log(frutas[i]);
}

let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];
    console.log("Fruta: " + fruta);

    if (fruta === 'Pera') {
        console.log("Achamos a Pera! Parando o loop.");
        break; // <== PARA o loop
    }

    i++;
}