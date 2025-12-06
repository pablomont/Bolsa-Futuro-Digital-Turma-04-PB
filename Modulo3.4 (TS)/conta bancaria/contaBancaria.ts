class ContaCorrente {
    constructor(private _saldo: number = 0) { }

    protected get saldo(): number {
        return this._saldo
    }

    protected set saldo(valor: number) {
        this._saldo = valor
    }

    protected podeSacar(valor: number): boolean {
        return this._saldo >= valor
    }

    public sacar(valor: number) {
        //verificar se tem saldo disponivel
        //se sim remove valor do saldo
        if (this.podeSacar(valor)) {
            this._saldo -= valor
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`)
        } else {
            console.log(`Saque de ${valor} não realizado. Saldo insuficiente: ${this._saldo}`)
        }
    }

    public depositar(valor: number) {
        if(this.podeSacar(valor)) {
            this._saldo += valor
            console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`)
        } else {
            console.log(`Depósito de ${valor} não realizado. Saldo insuficiente: ${this._saldo}`)
        }
    }

}

class ContaEspecial extends ContaCorrente {
    constructor(saldo: number, private limite: number = 0) {
        super(saldo);
    }

    protected podeSacar(valor: number): boolean {
        return this.saldo + this.limite >= valor
    }

    public depositar(valor: number): void {
        this.saldo += valor
        console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`)
    }
}

const contaEspecial = new ContaEspecial(1000, 500)
contaEspecial.sacar(800) // sucesso - novo saldo = -300
contaEspecial.sacar(800) // falha - saldo insuficiente
contaEspecial.depositar(100) //sucesso - novo saldo = -200 

