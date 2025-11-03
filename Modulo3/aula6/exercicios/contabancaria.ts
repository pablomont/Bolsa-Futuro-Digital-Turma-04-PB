// Encapsulamento e inicialização
// Métodos de acesso protegidos para o saldo.
// Isso permitirá que subclasses acessem e modifiquem o saldo de forma controlada. 

class contaCorrente{
    private _saldo: number
    constructor(saldo: number){
        this._saldo = saldo
    }

    protected get saldo(){
        return this._saldo
    }
    protected set saldo(valor: number){
        this._saldo = valor
    }

    depositar(valor: number){
        this._saldo += valor
        console.log(`Sucesso (Novo saldo: ${this._saldo})`)
    }

    sacar(valor: number){
        if (valor <= this._saldo){
            this._saldo -= valor
            console.log(`Sucesso - Novo saldo: ${this._saldo}`)
        } else{
            console.log("Falha - Saldo insuficiente")
        }
    }
}

class contaEspecial extends contaCorrente{
    limite: number
    constructor(saldo: number, limite: number){
        super(saldo)
        this.limite = limite
    }

    sacar(valor: number){
        if (this.saldo + this.limite >= valor){
            if(valor <= this.saldo){
                this.saldo -= valor
            } else {
                const resto = valor - this.saldo
                this.saldo -= valor
                this.limite -= resto
            }
            console.log(`Sucesso - Novo saldo: ${this.saldo}`)
            return true
        } else{
            console.log("Falha - Saldo insuficiente")
            return false
        }
    }
}

const contaJulia = new contaEspecial(500, 1000)
contaJulia.sacar(800)
contaJulia.sacar(800)
contaJulia.depositar(100)