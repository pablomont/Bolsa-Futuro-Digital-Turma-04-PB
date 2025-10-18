var Carro = /** @class */ (function () {
    function Carro() {
        this.nome = '';
        this.potencia = 0;
        this.velocidade = 0;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia; // velocidade = velocidade + potencia
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5; // velocidade = velocidade * 0.5
    };
    Carro.prototype.exibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade, " km/h"));
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = 'Fusca 1988';
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();
var ferrari = new Carro();
ferrari.potencia = 15;
ferrari.nome = 'Ferrari GTB';
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
if (fusca.velocidade > ferrari.velocidade) {
    console.log("O carro ".concat(fusca.nome, " est\u00E1 com a maior velocidade."));
}
else if (ferrari.velocidade > fusca.velocidade) {
    console.log("O carro ".concat(ferrari.nome, " est\u00E1 com a maior velocidade."));
}
else {
    console.log("Os dois carros est\u00E3o com a mesma velocidade.");
}
