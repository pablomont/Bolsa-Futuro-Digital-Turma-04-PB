"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(_ingredientes) {
        this._ingredientes = _ingredientes;
    }
    Pizza.prototype.calculaPreco = function () {
        if (this._ingredientes.length <= 2) {
            return 15;
        }
        else if (this._ingredientes.length <= 5) {
            return 20;
        }
        else {
            return 23;
        }
    };
    Object.defineProperty(Pizza.prototype, "ingredientes", {
        get: function () {
            return this._ingredientes;
        },
        enumerable: false,
        configurable: true
    });
    return Pizza;
}());
exports.Pizza = Pizza;
