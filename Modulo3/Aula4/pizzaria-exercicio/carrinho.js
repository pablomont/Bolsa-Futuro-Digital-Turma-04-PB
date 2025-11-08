"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
var Carrinho = /** @class */ (function () {
    function Carrinho() {
        this.pizzas = [];
    }
    Carrinho.prototype.adicionarPizza = function (pizza) {
        if (pizza.ingredientes.length > 0) {
            this.pizzas.push(pizza);
        }
        else {
            console.log('Não é possível adicionar pizza sem ingredientes!');
        }
    };
    Carrinho.prototype.obtemTotal = function () {
        var valorTotal = 0;
        this.pizzas.forEach(function (pizza) {
            valorTotal += pizza.calculaPreco();
        });
        return valorTotal;
    };
    Carrinho.prototype.obterListaPrecos = function () {
        return this.pizzas.map(function (pizza) { return pizza.preco; });
    };
    Carrinho.prototype.obterPizzasPremium = function () {
        return this.pizzas.filter(function (pizza) { return pizza.preco >= 23 || pizza.ingredientes.length > 5; });
    };
    Carrinho.prototype.obterIngredientesPorPizzaPremium = function () {
        return this.pizzas
            .filter(function (pizza) { return pizza.tipo = 'Premium'; })
            .map(function (pizza) { return pizza.ingredientes; });
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
