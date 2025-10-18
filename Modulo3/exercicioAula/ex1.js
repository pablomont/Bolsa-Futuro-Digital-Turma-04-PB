var Carro = /** @class */ (function () {
    function Carro() {
        this.nome = '';
        this.potencia = 0;
        this.velocidade = 0;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia;
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5;
    };
    Carro.prototype.ExibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade, " KM/H"));
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = 'fusca 1998';
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.ExibirVelocidadeAtual();
var ferrari = new Carro();
ferrari.nome = 'Ferarri GTB';
ferrari.potencia = 15;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.ExibirVelocidadeAtual();
if (fusca.velocidade > ferrari.velocidade) {
    console.log("A velociddade do Fusca é maior");
}
else {
    console.log("A velociddade da Ferrari é maior");
}
/* function comp(obj1:object, obj2:object, atr:number){
    if(obj1.atr >)
}
 */ 
