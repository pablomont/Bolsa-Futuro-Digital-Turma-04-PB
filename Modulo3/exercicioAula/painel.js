"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Painel = void 0;
var Painel = /** @class */ (function () {
    function Painel() {
    }
    Painel.prototype.Exibir = function (velocidade) {
        console.log("PAINEL: A velocidade do carro \u00E9 ".concat(velocidade, " km/h"));
    };
    return Painel;
}());
exports.Painel = Painel;
