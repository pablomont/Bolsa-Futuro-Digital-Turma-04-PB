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
    function ContaCorrente(Saldo) {
        if (Saldo === void 0) { Saldo = 500; }
        this.Saldo = Saldo;
        this.saldo = 500;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log("Sucesso - Novo saldo ap\u00F3s o saque: ".concat(this.saldo));
        }
        else {
            console.log("Erro - Saldo insuficiente para saque");
        }
    };
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(saldo, limite) {
        if (saldo === void 0) { saldo = 0; }
        if (limite === void 0) { limite = 0; }
        var _this = _super.call(this, saldo) || this;
        _this.limite = limite;
        return _this;
    }
    ContaEspecial.prototype.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            console.log("Sucesso - Novo saldo ap\u00F3s o saque: ".concat(this.saldo));
        }
        else {
            console.log("Erro - Saldo insuficiente para saque");
        }
    };
    return ContaEspecial;
}(ContaCorrente));
var conta = new ContaEspecial(500, 1000);
conta.sacar(800);
conta.sacar(800);
conta.depositar(100);
