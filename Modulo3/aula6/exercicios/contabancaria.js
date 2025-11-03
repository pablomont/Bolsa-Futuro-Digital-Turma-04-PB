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
        this._saldo = saldo;
    }
    Object.defineProperty(contaCorrente.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (valor) {
            this._saldo = valor;
        },
        enumerable: false,
        configurable: true
    });
    contaCorrente.prototype.depositar = function (valor) {
        this._saldo += valor;
        console.log("Sucesso (Novo saldo: ".concat(this._saldo, ")"));
    };
    contaCorrente.prototype.sacar = function (valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log("Sucesso - Novo saldo: ".concat(this._saldo));
        }
        else {
            console.log("Falha - Saldo insuficiente");
        }
    };
    return contaCorrente;
}());
var contaEspecial = /** @class */ (function (_super) {
    __extends(contaEspecial, _super);
    function contaEspecial(saldo, limite) {
        var _this = _super.call(this, saldo) || this;
        _this.limite = limite;
        return _this;
    }
    contaEspecial.prototype.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
            }
            else {
                var resto = valor - this.saldo;
                this.saldo -= valor;
                this.limite -= resto;
            }
            console.log("Sucesso - Novo saldo: ".concat(this.saldo));
            return true;
        }
        else {
            console.log("Falha - Saldo insuficiente");
            return false;
        }
    };
    return contaEspecial;
}(contaCorrente));
var contaJulia = new contaEspecial(500, 1000);
contaJulia.sacar(800);
contaJulia.sacar(800);
contaJulia.depositar(100);
