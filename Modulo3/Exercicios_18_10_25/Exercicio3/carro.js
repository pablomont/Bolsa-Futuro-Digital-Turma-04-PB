"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro = /** @class */ (function () {
    function carro(potencia, velocidade, nome) {
        this.potencia = potencia;
        this.velocidade = velocidade;
        this.nome = nome;
    }
    carro.prototype.acelar = function () {
        return this.velocidade += this.potencia;
    };
    carro.prototype.frear = function () {
        return this.velocidade *= 0.5;
    };
    carro.prototype.exibirVelocidadeAtual = function () {
        return "O carro ".concat(this.nome, " est\u00E1 a ").concat(this.velocidade, " km/h");
    };
    return carro;
}());
var fusca = new carro(2, 0, "Fusca 1988");
fusca.acelar();
fusca.acelar();
fusca.acelar();
console.log(fusca.exibirVelocidadeAtual());
var ferrari = new carro(15, 0, "Ferrari GTB");
ferrari.acelar();
ferrari.frear();
ferrari.frear();
console.log(ferrari.exibirVelocidadeAtual());
if (ferrari.velocidade > fusca.velocidade) {
    console.log("A ".concat(ferrari.nome, " est\u00E1 mais r\u00E1pida que o ").concat(fusca.nome));
}
else if (ferrari.velocidade < fusca.velocidade) {
    console.log("O ".concat(fusca.nome, " est\u00E1 mais r\u00E1pido que a ").concat(ferrari.nome));
}
else {
    console.log("Os dois carros est\u00E3o na mesma velocidade");
}
