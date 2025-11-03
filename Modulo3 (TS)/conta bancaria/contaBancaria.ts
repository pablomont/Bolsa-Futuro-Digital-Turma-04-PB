class ContaCorrente {
    constructor(private _saldo: number = 0) { }

    protected get saldo(): number {
        return this._saldo
    }

    protected set saldo(valor: number) {
        this._saldo = valor
    }

    depositar(valor: number) {
        this._saldo += valor
        console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`)
    }

    sacar(valor: number) {
        //verificar se tem saldo disponivel
        //se sim remove valor do saldo
        if (this._saldo >= valor) {
            this._saldo -= valor
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`)
        } else {
            console.log(`Saque de ${valor} não realizado. Saldo insuficiente: ${this._saldo}`)
        }
    }
}

class ContaEspecial extends ContaCorrente {
    constructor(saldo: number, private limite: number = 0) {
        super(saldo);
    }

    sacar (valor: number) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`)
        } else {
            console.log(`Saque de ${valor} não realizado. Saldo insuficiente: ${this.saldo}`)
        }
    }
}

const contaEspecial = new ContaEspecial(1000, 500)
contaEspecial.sacar(800) // sucesso - novo saldo = -300
contaEspecial.sacar(800) // falha - saldo insuficiente
contaEspecial.depositar(100) //sucesso - novo saldo = -200 

