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
var contaCorrente = /** @class */ (function () {
    function contaCorrente(saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.saldo = 0;
        this.saldo = saldo;
    }
    contaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        return "Sucesso - Novo saldo: ".concat(this.saldo);
    };
    contaCorrente.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return "Sucesso - Novo saldo: ".concat(this.saldo);
        }
    };
    return contaCorrente;
}());
var contaEspecial = /** @class */ (function (_super) {
    __extends(contaEspecial, _super);
    function contaEspecial(saldo, limite) {
        if (saldo === void 0) { saldo = 0; }
        if (limite === void 0) { limite = 0; }
        var _this = _super.call(this, saldo) || this;
        _this.limite = 0;
        _this.limite = limite;
        return _this;
    }
    contaEspecial.prototype.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            return "Sucesso - Novo saldo: ".concat(this.saldo);
        }
        else {
            return "Falha - Saldo insuficiente";
        }
    };
    return contaEspecial;
}(contaCorrente));
var conta1 = new contaCorrente(100);
var conta2 = new contaEspecial(500, 1000);
console.log(conta1.depositar(50));
console.log(conta1.sacar(50));
console.log(conta2.sacar(800));
console.log(conta2.sacar(800));
console.log(conta2.depositar(100));
