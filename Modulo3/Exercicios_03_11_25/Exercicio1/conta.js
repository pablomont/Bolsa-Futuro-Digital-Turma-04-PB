class contaCorrente1 {
    _saldo;
    constructor(_saldo = 0) {
        this._saldo = _saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    depositar(valor) {
        this._saldo += valor;
        return `Sucesso - Novo saldo: ${this._saldo}`;
    }
    podeSacar(valor) {
        return this._saldo >= valor;
    }
    sacar(valor) {
        if (this.podeSacar(valor)) {
            this._saldo -= valor;
            return `Sucesso - Novo saldo: ${this._saldo}`;
        }
        else {
            return 'Falha - Saldo insuficiente';
        }
    }
}
class contaEspecial1 extends contaCorrente1 {
    limite;
    constructor(saldo = 0, limite = 0) {
        super(saldo);
        this.limite = limite;
    }
    podeSacar(valor) {
        return this.saldo + this.limite >= valor;
    }
}
const conta3 = new contaCorrente1(100);
const conta4 = new contaEspecial1(500, 1000);
console.log(conta3.depositar(50));
console.log(conta3.sacar(50));
console.log(conta4.sacar(800));
console.log(conta4.sacar(800));
console.log(conta4.depositar(100));
export {};
//# sourceMappingURL=conta.js.map