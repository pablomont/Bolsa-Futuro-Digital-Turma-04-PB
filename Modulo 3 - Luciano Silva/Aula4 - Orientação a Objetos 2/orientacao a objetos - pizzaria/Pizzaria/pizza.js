"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(ingredientes) {
        this.ingredientes = ingredientes;
    }
    Pizza.prototype.calcularPreco = function () {
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
var pizza1 = new Pizza(["queijo", "presunto"]);
console.log("Preço Pizza1: R$", pizza1.calcularPreco()); //15
var pizza2 = new Pizza(["queijo", "presunto", "tomate"]);
console.log("Preço Pizza2: R$", pizza2.calcularPreco()); //20
var pizza3 = new Pizza(["queijo", "presunto", "tomate", "cebola", "milho", "azeitona"]);
console.log("Preço Pizza3: R$", pizza3.calcularPreco()); //23
