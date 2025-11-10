"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(ingredientes) {
        this._ingredientes = ingredientes;
    }
    Pizza.prototype.calculaPreco = function () {
        var qtd = this._ingredientes.length;
        if (qtd <= 2)
            return 15;
        if (qtd <= 5)
            return 20;
        return 23;
    };
    Object.defineProperty(Pizza.prototype, "ingredientes", {
        // getter público
        get: function () {
            return this._ingredientes;
        },
        enumerable: false,
        configurable: true
    });
    return Pizza;
}());
exports.Pizza = Pizza;
