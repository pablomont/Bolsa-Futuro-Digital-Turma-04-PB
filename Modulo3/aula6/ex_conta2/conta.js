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
    function ContaCorrente(saldo) {
        if (saldo === void 0) { saldo = 500; }
        this._saldo = saldo;
    }
    Object.defineProperty(ContaCorrente.prototype, "saldo", {
        // getter protegido
        get: function () {
            return this._saldo;
        },
        // setter protegido
        set: function (valor) {
            this._saldo = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Novo Método protegido - regra básica de saque
    ContaCorrente.prototype.podeSacar = function (valor) {
        return valor <= this._saldo;
    };
    // usa o podeSacar() e centraliza a lógica do saque
    ContaCorrente.prototype.sacar = function (valor) {
        if (this.podeSacar(valor)) {
            this.saldo = this.saldo - valor;
            console.log("Sucesso - Novo saldo: ".concat(this.saldo));
        }
        else {
            console.log("Falha - Saldo insuficiente.");
        }
    };
    ContaCorrente.prototype.depositar = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Sucesso - Novo saldo: ".concat(this._saldo));
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    };
    return ContaCorrente;
}());
// Subclasse c/ regra de limite especial
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(limite, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 500; }
        var _this = _super.call(this, saldoInicial) || this;
        _this.limite = limite;
        return _this;
    }
    // lembrar - Sobrescreve apenas a regra de verificação (não o método sacar!)
    ContaEspecial.prototype.podeSacar = function (valor) {
        return valor <= this.saldo + this.limite;
    };
    return ContaEspecial;
}(ContaCorrente));
// Teste
var contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800); // Sucesso - Novo saldo: -300
contaEspecial.sacar(800); // Falha - Saldo insuficiente
contaEspecial.depositar(100); // Sucesso - Novo saldo: -200
