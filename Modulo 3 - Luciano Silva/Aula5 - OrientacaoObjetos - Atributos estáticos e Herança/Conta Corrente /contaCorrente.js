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
    function ContaCorrente() {
        this.saldo = 500;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Sucesso - novo saldo: ".concat(this.saldo));
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("sucesso - Novo saldo: ".concat(this.saldo));
        }
        else {
            console.log("Falha - Saldo Insificiente");
        }
    };
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
