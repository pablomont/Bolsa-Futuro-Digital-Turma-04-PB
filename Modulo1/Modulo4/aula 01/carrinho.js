"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
class Carrinho {
    pizzas;
    constructor() {
        this.pizzas = [];
    }
    adicionarPizza(pizza) {
        if (pizza.ingredientes.length === 0) {
            console.log("Não é possível adicionar pizza sem ingredientes!");
            return;
        }
        this.pizzas.push(pizza);
    }
    obterListaPrecos() {
        return this.pizzas.map(pizza => pizza.preco);
    }
}
exports.Carrinho = Carrinho;
//# sourceMappingURL=carrinho.js.map