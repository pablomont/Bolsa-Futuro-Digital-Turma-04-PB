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
        this.saldo = saldo;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
        console.log("Sucesso - Novo Saldo: ", this.saldo);
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
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
    ContaEspecial.prototype.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            console.log("Sucesso - novo saldo", this.saldo);
        }
        else {
            console.log("Falha - saldo Insuficiente");
        }
    };
    return ContaEspecial;
}(ContaCorrente));
var contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800);
contaEspecial.sacar(800);
contaEspecial.depositar(100);
