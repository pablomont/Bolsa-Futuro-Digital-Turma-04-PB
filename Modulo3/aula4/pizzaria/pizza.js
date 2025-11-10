export class Pizza {
    _ingredientes;
    constructor(_ingredientes) {
        this._ingredientes = _ingredientes;
    }
    calcularPreco() {
        if (this._ingredientes.length <= 2) {
            return 15;
        }
        else if (this._ingredientes.length >= 3 && this._ingredientes.length <= 5) {
            return 20;
        }
        else {
            return 23;
        }
    }
    get ingredientes() {
        return this._ingredientes;
    }
}
//# sourceMappingURL=pizza.js.map