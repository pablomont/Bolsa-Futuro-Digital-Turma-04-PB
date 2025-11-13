"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(ingredientes) {
        this.ingredientes = ingredientes;
    }
    Pizza.prototype.calculaPreco = function () {
        var quantidade = this.ingredientes.length;
        if (quantidade <= 2) {
            return 15;
        }
        else if (quantidade >= 3 && quantidade <= 5) {
            return 20;
        }
        else {
            return 23;
        }
    };
    return Pizza;
}());
exports.Pizza = Pizza;
