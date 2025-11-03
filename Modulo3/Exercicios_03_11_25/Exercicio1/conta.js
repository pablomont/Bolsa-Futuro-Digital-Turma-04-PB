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
var contaCorrente1 = /** @class */ (function () {
    function contaCorrente1(_saldo) {
        if (_saldo === void 0) { _saldo = 0; }
        this._saldo = _saldo;
        this._saldo = _saldo;
    }
    Object.defineProperty(contaCorrente1.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (valor) {
            this._saldo = valor;
        },
        enumerable: false,
        configurable: true
    });
    contaCorrente1.prototype.depositar = function (valor) {
        this._saldo += valor;
        return "Sucesso - Novo saldo: ".concat(this._saldo);
    };
    contaCorrente1.prototype.sacar = function (valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return "Sucesso - Novo saldo: ".concat(this._saldo);
        }
    };
    return contaCorrente1;
}());
var contaEspecial1 = /** @class */ (function (_super) {
    __extends(contaEspecial1, _super);
    function contaEspecial1(saldo, limite) {
        if (saldo === void 0) { saldo = 0; }
        if (limite === void 0) { limite = 0; }
        var _this = _super.call(this, saldo) || this;
        _this.limite = 0;
        _this.limite = limite;
        return _this;
    }
    contaEspecial1.prototype.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            return "Sucesso - Novo saldo: ".concat(this.saldo);
        }
        else {
            return "Falha - Saldo insuficiente";
        }
    };
    return contaEspecial1;
}(contaCorrente1));
var conta3 = new contaCorrente1(100);
var conta4 = new contaEspecial1(500, 1000);
console.log(conta3.depositar(50));
console.log(conta3.sacar(50));
console.log(conta4.sacar(800));
console.log(conta4.sacar(800));
console.log(conta4.depositar(100));
