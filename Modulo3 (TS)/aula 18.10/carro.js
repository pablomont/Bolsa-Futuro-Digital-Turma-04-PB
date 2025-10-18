var Carro = /** @class */ (function () {
    function Carro() {
        //criando classe com valores padrão de inicialização
        this.potencia = 0;
        this.velocidade = 0;
        this.nome = '';
    }
    //criando comportamentos da classe: funções/métodos
    Carro.prototype.acelerar = function () {
        this.velocidade += this.potencia; //velocidade = velocidade + potencia
    };
    Carro.prototype.frear = function () {
        this.velocidade *= 0.5; //velocidade = velocidade * 0.5
    };
    Carro.prototype.exibirVelocidadeAtual = function () {
        console.log("A velocidade atual do carro ".concat(this.nome, " \u00E9 ").concat(this.velocidade, " km/h"));
    };
    Carro.carroMaisRapido = function (car1, car2) {
        if (car1.velocidade > car2.velocidade) {
            console.log("O carro mais r\u00E1pido \u00E9 o ".concat(car1.nome, " com velocidade de ").concat(car1.velocidade, " km/h"));
        }
        else if (car2.velocidade > car1.velocidade) {
            console.log("O carro mais r\u00E1pido \u00E9 o ".concat(car2.nome, " com velocidade de ").concat(car2.velocidade, " km/h"));
        }
        else {
            console.log("Os dois carros est\u00E3o com a mesma velocidade de ".concat(car1.velocidade, " km/h"));
        }
    };
    return Carro;
}());
var fusca = new Carro();
fusca.nome = "Fusca 1988";
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();
var ferrari = new Carro();
ferrari.nome = "Ferrari GTB";
ferrari.potencia = 15;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.exibirVelocidadeAtual();
Carro.carroMaisRapido(fusca, ferrari);
