"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const painel_1 = require("./painel");
const motor_1 = require("./motor");
class Carro {
    nome;
    velocidade;
    painel;
    motor;
    constructor(nome, velocidade, painel, motor) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.painel = painel;
        this.motor = motor;
    }
    acelerar() {
        //o carro delega a tarefa de aumentar a velocidade ao motor
        this.velocidade = this.motor.aumentaVelocidade(this.velocidade);
    }
    frear() {
        this.velocidade *= 0.5; // velocidade = velocidade * 0.5
    }
}
// criando o carro e testando
const fusca = new Carro('fusca 1988', 0, new painel_1.Painel(), new motor_1.Motor(2));
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.frear();
fusca.painel.exibir(fusca.velocidade);
//# sourceMappingURL=carro.js.map