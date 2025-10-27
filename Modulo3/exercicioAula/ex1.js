"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    /*     nome: string = ''
        potencia: number = 0
        velocidade: number = 0
     */
    function Carro(nome, potencia, velocidade, painel) {
        if (velocidade === void 0) { velocidade = 0; }
        this.nome = nome;
        this.potencia = potencia;
        this.velocidade = velocidade;
        this.painel = painel;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia;
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5;
    };
    Carro.prototype.ExibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 de ").concat(this.velocidade, " KM/H"));
    };
    return Carro;
}());
/* const fusca = new Carro('Fusca 1998', 2,0, new Painel())
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.painel.Exibir(fusca.velocidade)

const ferrari = new Carro('Ferrari GTB', 15)
ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.ExibirVelocidadeAtual()

if(fusca.velocidade > ferrari.velocidade){
    console.log("A velociddade do Fusca é maior")
} else{
    console.log("A velociddade da Ferrari é maior")
}

 */ 
