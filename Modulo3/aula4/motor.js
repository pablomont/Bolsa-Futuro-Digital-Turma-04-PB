"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor(potencia) {
        this.potencia = potencia;
    }
    Motor.prototype.aumentaVelocidade = function (velocidade) {
        return velocidade += this.potencia;
    };
    return Motor;
}());
exports.Motor = Motor;
