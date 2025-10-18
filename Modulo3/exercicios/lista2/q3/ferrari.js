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
    Carro.prototype.velocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade));
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = 'fusca 1988';
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
var ferrari = new Carro();
ferrari.nome = 'ferrari GTB';
ferrari.potencia = 15;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.velocidadeAtual();
fusca.velocidadeAtual();
if (ferrari.velocidade > fusca.velocidade) {
    console.log("A ".concat(ferrari.nome, " est\u00E1 mais r\u00E1pida."));
}
else if (fusca.velocidade > ferrari.velocidade) {
    console.log("O ".concat(fusca.nome, " est\u00E1 mais r\u00E1pido."));
}
else {
    console.log("Os carros ".concat(ferrari.nome, " e ").concat(fusca.nome, " est\u00E3o com a mesma velocidade."));
}
