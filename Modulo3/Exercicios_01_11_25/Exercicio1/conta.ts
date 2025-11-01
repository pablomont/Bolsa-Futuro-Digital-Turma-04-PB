class contaCorrente{
    saldo: number = 0;

    constructor(saldo: number = 0){
        this.saldo = saldo;
    }

    depositar(valor: number){
        this.saldo+= valor
        return `Sucesso - Novo saldo: ${this.saldo}`
    }

    sacar(valor:number){
        if(this.saldo >= valor){
            this.saldo-=valor
            return `Sucesso - Novo saldo: ${this.saldo}`
        }
    }
}

class contaEspecial extends contaCorrente{
    limite: number = 0

    constructor(saldo: number =0, limite:number =0){
        super(saldo)
        this.limite = limite
    }

    sacar(valor:number){
        if(this.saldo + this.limite >= valor){
            this.saldo-=valor
            return `Sucesso - Novo saldo: ${this.saldo}`
        }
        else{
            return "Falha - Saldo insuficiente"
        }
    }
}

const conta1 = new contaCorrente(100)
const conta2 = new contaEspecial(500, 1000)

console.log(conta1.depositar(50))
console.log(conta1.sacar(50))
console.log(conta2.sacar(800))
console.log(conta2.sacar(800))
console.log(conta2.depositar(100))


