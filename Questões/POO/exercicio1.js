var Carro = /** @class */ (function () {
    function Carro() {
        this.potencia = 2;
        this.velocidade = 0;
        this.nome = "";
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia;
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5;
    };
    Carro.prototype.exibirVelocidadeAtual = function () {
        console.log("O carro ".concat(this.nome, " est\u00E1 a ").concat(this.velocidade, " km/h"));
    };
    Carro.prototype.informarStatus = function () {
        console.log("O carro ".concat(this.nome, " est\u00E1 a ").concat(this.velocidade, " km/h"));
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = "Fusca 1988";
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
ferrari.informarStatus();
if (ferrari.velocidade > fusca.velocidade) {
    console.log("A ferrari est\u00E1 mais r\u00E1pida, com ".concat(ferrari.velocidade, " km/h"));
}
else {
    console.log("O fusca est\u00E1 mais r\u00E1pido, com ".concat(fusca.velocidade, " km/h"));
}
