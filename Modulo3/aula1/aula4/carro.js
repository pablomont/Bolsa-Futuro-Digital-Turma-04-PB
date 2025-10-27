var Carro = /** @class */ (function () {
    function Carro(nome, potencia, velocidade) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidade = velocidade;
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
var fusca = new Carro('fusca 1988', 2, 0);
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();
var ferrari = new Carro('Ferraro GTB', 15, 0);
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
if (ferrari.velocidade > fusca.velocidade) {
    console.log('A velocidade da ferrari é maior');
}
else {
    console.log('A velocidade do fusca é maior');
}
