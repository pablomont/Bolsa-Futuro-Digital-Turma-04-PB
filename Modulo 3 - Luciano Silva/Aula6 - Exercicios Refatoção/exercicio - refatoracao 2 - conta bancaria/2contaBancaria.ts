class ContaCorrente {
    constructor(private _saldo: number = 500) { }

    protected get saldo() {
        return this._saldo
    }

    protected set saldo(valor: number) {
        this._saldo = valor

    }

    protected podeSacar(valor: number): boolean {
        return valor <= this._saldo;
    }

    sacar(valor: number): void {
        if (this.podeSacar(valor)) {
            this._saldo -= valor;
            console.log(`sucesso - Novo saldo: ${this._saldo}`)
        } else {
            console.log(`Falha - Saldo Insuficiente`)
        }
    }

    depositar(valor: number): void {
        this._saldo += valor;
        console.log(`Sucesso - novo saldo: ${this._saldo}`)
    }

}


class ContaEspecial extends ContaCorrente {
    limite: number = 1000;

 protected podeSacar(valor: number): boolean{
    return valor <= this.saldo + this.limite;
  }
}

const conta = new ContaEspecial();
conta.sacar(800);
conta.sacar(800);
conta.depositar(100);