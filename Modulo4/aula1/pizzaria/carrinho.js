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
            console.log("Não é possível adicionar pizza sem ingredientes!");
        }
    };
    Carrinho.prototype.obterTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.pizzas; _i < _a.length; _i++) {
            var pizza = _a[_i];
            total += pizza.calculaPreco();
        }
        return total;
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
