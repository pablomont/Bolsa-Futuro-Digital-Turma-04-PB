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
        this.salario = 0;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.salario += valor;
        console.log("Sucesso - novo saldo: ".concat(this.salario));
    };
    ContaCorrente.prototype.sacar = function (valor) {
        this.salario -= valor;
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
        if (valor <= this.salario + this.limite) {
            this.salario += valor;
            console.log("Sucesso - sucesso novo saldo: ".concat(this.salario));
        }
        else {
            console.log("Falha - salado insuficiente");
        }
    };
    return ContaEspecial;
}(ContaCorrente));
var conta1 = new ContaCorrente();
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(600);
var conta2 = new ContaEspecial();
conta2.sacar(500);
conta2.depositar(700);
