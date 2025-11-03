var Gato = /** @class */ (function () {
    function Gato(nome) {
        this.nome = nome;
        Gato.populacao++;
    }
    Gato.populacao = 0;
    return Gato;
}());
var gato1 = new Gato('Garfield');
var gato2 = new Gato('Tim');
console.log(Gato.populacao);
