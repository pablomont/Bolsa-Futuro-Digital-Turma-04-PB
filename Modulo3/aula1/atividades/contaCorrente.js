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
        if (valor > 0) {
            this.saldo += valor;
            console.log("Sucesso (Novo Saldo: ".concat(this.saldo, ")"));
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    };
    // Método p/ sacar
    ContaCorrente.prototype.sacar = function (valor) {
        //verificar se tem saldo disponivel
        //se sim 
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Sucesso - Novo saldo: ".concat(this.saldo));
        }
        else {
            console.log("Falha - Saldo insuficiente");
        }
    };
    return ContaCorrente;
}());
var ContaEspecial = /** @class */ (function (_super) {
    __extends(ContaEspecial, _super);
    //implementar o construtor e seus atributos
    // lembrar de chamar o super
    function ContaEspecial(limite) {
        var _this = _super.call(this) || this; // chama o construtor da superclasse
        _this.limite = limite;
        return _this;
    }
    // Sobrescrita do método sacar
    ContaEspecial.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            console.log("Sucesso - Novo Saldo: ".concat(this.saldo, "."));
        }
        else {
            console.log("Falha - Saldo insuficiente.");
        }
    };
    return ContaEspecial;
}(ContaCorrente));
// Teste
var contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800); // sucesso - novo saldo = -300
contaEspecial.sacar(800); //falha - saldo insuficiente
contaEspecial.depositar(100); //sucesso - novo saldo = -200
