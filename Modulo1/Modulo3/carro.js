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
    Carro.prototype.exibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade, " km/h"));
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = 'fusca 1988';
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();
var ferrari = new Carro();
ferrari.potencia = 15;
ferrari.nome = 'Ferraro GTB';
ferrari.potencia = 1;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
if (ferrari.velocidade > fusca.velocidade) {
    console.log(' A velocidade da ferrai é maior');
}
else {
    console.log(' A velocidade do fusca é maior');
}
