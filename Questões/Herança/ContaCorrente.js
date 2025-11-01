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
        if (saldo === void 0) { saldo = 0; }
        this.saldo = 0;
        this.saldo = saldo;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("SUCESSO - Novo saldo: ".concat(this.saldo));
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("FALHA - Saldo insuficiente. Voc\u00EA tem ".concat(this.saldo, " e tentou sacar ").concat(valor));
        }
        else {
            this.saldo -= valor;
            console.log("SUCESSO - Voc\u00EA sacou ".concat(valor, ". Novo saldo: ").concat(this.saldo));
        }
    };
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(limite, saldo) {
        var _this = _super.call(this, saldo) || this;
        _this.limite = 0;
        _this.limite = limite;
        return _this;
    }
    ContaEspecial.prototype.sacar = function (valor) {
        var saldoDisp = this.saldo + this.limite;
        if (valor > saldoDisp) {
            console.log("FALHA - Limite insuficiente.");
        }
        else {
            this.saldo -= valor;
            console.log("SUCESSO - Voc\u00EA sacou ".concat(valor, " e seu novo saldo \u00E9: ").concat(this.saldo));
        }
    };
    return ContaEspecial;
}(ContaCorrente));
var conta = new ContaEspecial(1000, 500);
conta.sacar(800); // Saída: -300
conta.sacar(800); // saída: falha
conta.depositar(100); // saída: -200
