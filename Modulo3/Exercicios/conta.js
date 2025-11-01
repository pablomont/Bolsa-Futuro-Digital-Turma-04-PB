var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(saldoInicial) {
        this.saldo = saldoInicial;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(saldoInicial, limite) {
        var _this = _super.call(this, saldoInicial) || this;
        _this.limite = limite;
        return _this;
    }
    ContaEspecial.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            if (this.saldo <= 0) {
                this.limite += this.saldo;
            }
            return true;
        }
        return false;
    };
    return ContaEspecial;
}(ContaCorrente));
var conta1 = new ContaCorrente(1000);
console.log("Saldo inicial conta1:", conta1.saldo); // 1000
conta1.depositar(500);
console.log("Após depósito de 500:", conta1.saldo); // 1500
var saque1 = conta1.sacar(200);
console.log("Saque de 200 realizado?", saque1); // true
console.log("Saldo após saque:", conta1.saldo); // 1300
