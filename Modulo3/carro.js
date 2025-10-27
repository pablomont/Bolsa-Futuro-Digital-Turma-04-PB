"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const painel_1 = require("./painel");
class Carro {
    nome;
    potencia;
    velocidade;
    painel;
    constructor(nome, potencia, velocidade, painel) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidade = velocidade;
        this.painel = painel;
    }
    acelerar() {
        this.velocidade += this.potencia; // velocidade = velocidade + potencia
    }
    frear() {
        this.velocidade *= 0.5; // velocidade = velocidade * 0.5
    }
}
const fusca = new Carro('fusca 1988', 2, 0, new painel_1.Painel());
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.painel.exibir(fusca.velocidade);
//# sourceMappingURL=carro.js.map