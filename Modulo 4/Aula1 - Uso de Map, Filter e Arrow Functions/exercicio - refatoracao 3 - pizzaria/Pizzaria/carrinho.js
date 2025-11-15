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
            console.log('Pizza adicionada ao carrinho');
        }
        else {
            console.log('Não é possível adiconar pizza sem ingredientes!');
        }
    };
    Carrinho.prototype.obterTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.pizzas; _i < _a.length; _i++) {
            var pizza = _a[_i];
            total += pizza.calcularPreco();
        }
        return total;
    };
    //um novo array contendo apenas o preço de cada pizza. map + arrow
    Carrinho.prototype.obterListasPrecos = function () {
        return this.pizzas.map(function (pizza) { return pizza.preco; });
    };
    //Retornar um novo array contendo apenas as pizzas "Premium: R$23". filter + arrow
    Carrinho.prototype.obterPizzasPremium = function () {
        return this.pizzas
            .filter(function (pizza) { return pizza.preco === 23; });
    };
    //a lista de ingredientes apenas das pizzas que são Premium. filter + map
    Carrinho.prototype.obterIngredientesPorPizzaPremium = function () {
        return this.pizzas
            .filter(function (pizza) { return pizza.preco === 23; })
            .map(function (pizza) { return pizza.ingredientes; });
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
