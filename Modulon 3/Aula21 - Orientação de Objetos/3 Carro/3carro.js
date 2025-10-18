var Carro = /** @class */ (function () {
    function Carro() {
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
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade));
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = "Fusca 1998";
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();
var ferrari = new Carro();
ferrari.nome = "Ferrari GTB";
ferrari.potencia = 15;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
// Comparando velocidades
if (fusca.velocidade > ferrari.velocidade) {
    console.log("".concat(fusca.nome, " \u00E9 mais r\u00E1pido que ").concat(ferrari.nome, "."));
}
else if (fusca.velocidade < ferrari.velocidade) {
    console.log("".concat(ferrari.nome, " \u00E9 mais r\u00E1pido que ").concat(fusca.nome, "."));
}
else {
    console.log("".concat(fusca.nome, " e ").concat(ferrari.nome, " est\u00E3o com a mesma velocidade."));
}
