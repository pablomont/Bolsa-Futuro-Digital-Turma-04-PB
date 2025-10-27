"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var painel_1 = require("./painel");
var Carro = /** @class */ (function () {
    function Carro(nome, motor, velocidade, painel) {
        if (nome === void 0) { nome = ''; }
        if (velocidade === void 0) { velocidade = 0; }
        this.nome = nome;
        this.motor = motor;
        this.velocidade = velocidade;
        this.painel = painel;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.motor.aumentaVelocidade(this.velocidade);
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5;
    };
    return Carro;
}());
var Motor = /** @class */ (function () {
    function Motor(potencia) {
        this.potencia = potencia;
    }
    Motor.prototype.aumentaVelocidade = function (velocidade) {
        return velocidade + this.potencia;
    };
    return Motor;
}());
var fusca = new Carro('fusca 1988', new Motor(2), 0, new painel_1.Painel);
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.painel.exibir(fusca.velocidade);
var ferrari = new Carro('ferrari GTB', new Motor(15), 0, new painel_1.Painel);
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.painel.exibir(ferrari.velocidade);
if (fusca.velocidade > ferrari.velocidade) {
    console.log("A velocidade atual do Fusca é maior");
}
else if (ferrari.velocidade > fusca.velocidade) {
    console.log("A velocidade atual da Ferrari é maior.");
}
else {
    console.log("Os dois possuem a mesma velocidade no momento.");
}
