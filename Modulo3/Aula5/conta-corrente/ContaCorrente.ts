class ContaCorrente{
    constructor(private _saldo: number = 500){}

    sacar(valor: number){
        if(this.podeSacar(valor)){
            this._saldo -= valor
            console.log(`Sucesso - Novo Saldo: ${this._saldo}`)
        }else{
            console.log(`Falha - Saldo insuficiente`)
        }
    }

    depositar(valor: number){
        if(valor > 0){
            this._saldo += valor
            console.log(`Sucesso - Novo Saldo: ${this._saldo}`)
        }
    }

    protected podeSacar(valor: number){
        return this._saldo >= valor
    }

    get saldo(){
        return this._saldo
    }

    set saldo(saldo: number){
        this._saldo = saldo
    }

}

class ContaEspecial extends ContaCorrente{
    constructor(private limite: number = 1000){
        super()
    }

    protected podeSacar(valor: number) {
        return (this.saldo + this.limite) >= valor
    }
}

const contaEspecial = new ContaEspecial()
contaEspecial.sacar(800)
contaEspecial.sacar(800)
contaEspecial.depositar(100)