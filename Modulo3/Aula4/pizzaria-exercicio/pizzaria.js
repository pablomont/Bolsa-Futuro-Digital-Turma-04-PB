"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(ingredientes) {
        this.ingredientes = ingredientes;
        this.const = new Pizza(["calabresa", "queijo",]);
    }
    Pizza.prototype.calculaPreco = function () {
        this.ingredientes.length <= 2;
        this.ingredientes.length <= 5;
    };
    return Pizza;
}());
exports.Pizza = Pizza;
