"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
class Carrinho {
    pizzas = [];
    adicionarPizza(pizza) {
        if (pizza.ingredientes.length > 0) {
            this.pizzas.push(pizza);
        }
        else {
            console.log("Não é possível adicionar pizza sem ingredientes!");
        }
    }
    obtemTotal() {
        let total = 0;
        for (const pizza of this.pizzas) {
            total += pizza.calculaPreco();
        }
        return total;
    }
}
exports.Carrinho = Carrinho;
//# sourceMappingURL=carrinho.js.map