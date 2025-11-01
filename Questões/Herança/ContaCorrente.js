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
            console.log("SUCESSO - Voc\u00EA sacou ".concat(valor, ". novo saldo: ").concat(this.saldo));
        }
    };
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    function ContaEspecial(limite) {
        var _this = _super.call(this) || this;
        _this.limite = 0;
        return _this;
    }
    ContaEspecial.prototype.sacar = function (valor) {
        if (valor > this.saldo && (this.saldo + this.limite) > valor) { // usa o limite
            var novoLimite = (this.saldo + this.limite) - valor;
            console.log("SUCESSO -Voc\u00EA sacou ".concat(valor, " utilizando seu limite e seu novo limite \u00E9 ").concat(novoLimite));
        }
        else if (this.saldo < 0) {
            console.log("FALHA - Saldo insuficiente");
        }
        else { // nao usa o limite
            this.saldo -= valor;
            console.log("SUCESSO - Voc\u00EA sacou ".concat(valor, " e seu novo saldo \u00E9 ").concat(this.saldo));
        }
    };
    ContaEspecial.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("SUCESSO - Novo saldo : ".concat(this.saldo));
    };
    return ContaEspecial;
}(ContaCorrente));
var conta = new ContaEspecial(1000);
conta.saldo = 500;
conta.sacar(800);
conta.sacar(800);
conta.depositar(100);
