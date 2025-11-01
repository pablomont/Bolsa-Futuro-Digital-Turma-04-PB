var gato = /** @class */ (function () {
    function gato(nome) {
        this.nome = nome;
        gato.populacao++;
    }
    gato.populacao = 0;
    return gato;
}());
console.log(gato.populacao);
var gato1 = new gato("Garfield");
// dot notation de algum static só pode ser usado na classe e não no objeto
console.log(gato.populacao);
var gato2 = new gato("Gatu");
var gato3 = new gato("Mickey");
var gato4 = new gato("Minnie");
console.log(gato.populacao);
