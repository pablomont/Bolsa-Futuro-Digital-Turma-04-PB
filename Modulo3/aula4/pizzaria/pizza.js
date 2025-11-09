export class Pizza {
    ingredientes;
    constructor(ingredientes) {
        this.ingredientes = ingredientes;
    }
    calcularPreco() {
        if (this.ingredientes.length <= 2) {
            return 15;
        }
        else if (this.ingredientes.length >= 3 && this.ingredientes.length <= 5) {
            return 20;
        }
        else {
            return 23;
        }
    }
}
//# sourceMappingURL=pizza.js.map