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
        console.log("Sucesso - novo saldo: ".concat(this._saldo));
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log("sucesso - Novo saldo: ".concat(this._saldo));
        }
        else {
            console.log("Falha - Saldo Insificiente");
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
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.limite = 1000;
        return _this;
    }
    ContaEspecial.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            console.log("Sucesso - novo saldo: ".concat(this.saldo));
        }
        else {
            console.log("Falha - saldo insuficiente");
        }
    };
    return ContaEspecial;
}(ContaCorrente));
var conta = new ContaEspecial();
conta.sacar(800);
conta.sacar(800);
conta.depositar(100);
