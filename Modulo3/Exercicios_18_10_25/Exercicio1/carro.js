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
var carro1 = new carro(150, 75, "Fusca");
carro1.frear();
console.log(carro1.exibirVelocidadeAtual());
