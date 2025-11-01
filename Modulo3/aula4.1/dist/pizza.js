"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    ingredientes;
    constructor(ingredientes) {
        this.ingredientes = ingredientes;
    }
    calculaPreco() {
        const qtd = this.ingredientes.length;
        if (qtd <= 2)
            return 15;
        if (qtd <= 5)
            return 20;
        return 23;
    }
}
exports.Pizza = Pizza;
//# sourceMappingURL=pizza.js.map