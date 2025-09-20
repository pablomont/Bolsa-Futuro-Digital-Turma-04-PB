var cachorro = {
    raça: "Labrador",
    idade: 10,
    cor: "Preto",

    latir: function() {
        console.log("Au Au");
    }
};

let verHomem = true;

if (verHomem) {
    cachorro.latir(); 
} else {
    console.log("O cachorro está quieto");
}
