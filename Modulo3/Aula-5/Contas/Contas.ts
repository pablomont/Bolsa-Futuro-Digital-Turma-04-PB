class ContaCorrente{
    constructor (protected _saldo: number){}

    depositar(valor: number){
        this._saldo += valor
        console.log (`Sucesso! seu saldo é: ${this._saldo}`)
    }
    public sacar(valor: number){
        if (this.podeSacar(valor)){
            this._saldo -= valor;
            console.log (`Sucesso! seu saldo é: ${this._saldo}`)
        }
        else {
            console.log ("Falha - saldo insuficiente.")
        }
    }

    protected get saldo(){
        return this._saldo
    }

    protected set saldo(valor: number){
        this._saldo =
    }

    protected podeSacar(valor: number){
        if (this._saldo >= valor){
            return true
        }

        else {
            return false
        }
    }

}

class ContaEspecial extends ContaCorrente{
    constructor (public limite: number, _saldo: number){
        super(_saldo)
    }

    protected podeSacar(valor: number){
        if ((this._saldo + this.limite) >= valor){
            return true
        }
        else {
            return false
        }
    }
}

const contaEspecial = new ContaEspecial(1000, 500)
contaEspecial.sacar(800)
contaEspecial.sacar(800)
contaEspecial.depositar(100)