var Gato = /** @class */ (function () {
    function Gato(nome) {
        this.nome = nome;
    }
    Gato.população = 2;
    return Gato;
}());
var gato1 = new Gato('garfield');
var gato2 = new Gato('tom')
gato1.nome;
Gato.população;
console.log(Gato.população)