var carro = /** @class */ (function () {
    function carro() {
        this.nome = '';
        this.potencia = 0;
        this.velocidade = 0;
    }
    carro.prototype.acelerar = function () {
        this.velocidade += this.potencia;
    };
    carro.prototype.frear = function () {
        this.velocidade *= 0.5;
    };
    carro.prototype.exibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, "\u00E9 de ").concat(this.velocidade, " km/h"));
    };
    return carro;
}());
var fusca = new carro();
fusca.nome = 'fusca 1988';
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();
var ferrari = new carro();
ferrari.potencia = 15;
ferrari.nome = 'Ferrari GTB';
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
if (fusca.velocidade > ferrari.velocidade) {
    console.log('A velocidade da ferrari é maior');
}
else {
    console.log('A velocidade do fusca é maior');
}
