var Carro = /** @class */ (function () {
    function Carro(potencia, velocidade, nome) {
        if (potencia === void 0) { potencia = 0; }
        if (velocidade === void 0) { velocidade = 0; }
        if (nome === void 0) { nome = ''; }
        this.potencia = potencia;
        this.velocidade = velocidade;
        this.nome = nome;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia;
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5;
    };
    Carro.prototype.exibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade, " km/h."));
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
ferrari.nome = 'Ferrari GTB';
ferrari.potencia = 15;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
if (fusca.velocidade > ferrari.velocidade) {
    console.log("A velocidade atual do Fusca é maior");
}
else if (ferrari.velocidade > fusca.velocidade) {
    console.log("A velocidade atual da Ferrari é maior");
}
else {
    console.log("Os dois possuem a mesma velocidade no momento");
}
