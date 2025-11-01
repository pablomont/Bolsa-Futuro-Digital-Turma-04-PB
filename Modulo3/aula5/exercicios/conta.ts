class contaCorrente{
    saldo: number
    constructor(saldo: number){
        this.saldo = saldo
    }

    depositar(valor: number){
        this.saldo += valor
        console.log(`Sucesso (Novo saldo: ${this.saldo})`)
    }

    sacar(valor: number){
        if (valor <= this.saldo){
            this.saldo -= valor
            console.log(`Sucesso - Novo saldo: ${this.saldo}`)
            return true
        } else{
            console.log("Falha - Saldo insuficiente")
            return false
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