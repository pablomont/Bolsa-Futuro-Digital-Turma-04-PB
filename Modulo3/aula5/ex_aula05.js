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
    function ContaCorrente(_saldo) {
        if (_saldo === void 0) { _saldo = 500; }
        this._saldo = _saldo;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this._saldo += valor;
        console.log("Sucesso - novo saldo", this._saldo);
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (this.podeSacar(valor)) {
            this._saldo -= valor;
            console.log("Sucesso - novo saldo", this._saldo);
        }
        else {
            console.log("Falha - saldo insuficiente.");
        }
    };
    Object.defineProperty(ContaCorrente.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (valor) {
            this._saldo = valor;
        },
        enumerable: false,
        configurable: true
    });
    ContaCorrente.prototype.podeSacar = function (valor) {
        if (this._saldo >= valor) {
            return true;
        }
        else {
            return false;
        }
    };
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(limite) {
        var _this = _super.call(this) || this;
        _this.limite = limite;
        return _this;
    }
    ContaEspecial.prototype.podeSacar = function (valor) {
        var saldoDisponivel = this.saldo + this.limite;
        return saldoDisponivel >= valor;
    };
    return ContaEspecial;
}(ContaCorrente));
var contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800); //sucesso novo saldo = -300
contaEspecial.sacar(800); // falha - saldo insuciente
contaEspecial.depositar(100); // Sucesso (Novo saldo: -200)
