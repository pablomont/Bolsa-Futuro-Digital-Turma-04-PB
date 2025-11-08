"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var painel_1 = require("./painel");
var Carro = /** @class */ (function () {
    function Carro(nome, potencia, velocidade, painel) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidade = velocidade;
        this.painel = painel;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia; // velocidade = velocidade + potencia
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5; // velocidade = velocidade * 0.5
    };
    return Carro;
}());
var fusca = new Carro('fusca 1988', 2, 0, new painel_1.Painel());
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.painel.exibir(fusca.velocidade);
// const ferrari = new Carro('Ferraro GTB', 15, 0)
// ferrari.acelerar()
// ferrari.frear()
// ferrari.frear()
// ferrari.exibirVelocidadeAtual()
// if(ferrari.velocidade > fusca.velocidade){
//     console.log('A velocidade da ferrari é maior')
// } else {
//     console.log('A velocidade do fusca é maior')
// }
