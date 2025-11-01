"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
class Motor {
    potencia;
    constructor(potencia) {
        this.potencia = potencia;
    }
    aumentaVelocidade(velocidade) {
        // A nova velocidade vai ser a velocidade atual + potência do motor
        return velocidade + this.potencia;
    }
}
exports.Motor = Motor;
//# sourceMappingURL=motor.js.map