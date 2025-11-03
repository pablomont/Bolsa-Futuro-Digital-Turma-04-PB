class contaCorrente1{

    constructor(protected _saldo: number = 0){
        this._saldo = _saldo;
    }

    get saldo(): number{
        return this._saldo
    }

    set saldo(valor: number){
        this._saldo = valor
    }

    depositar(valor: number){
        this._saldo+= valor
        return `Sucesso - Novo saldo: ${this._saldo}`
    }

    sacar(valor:number){
        if(this._saldo >= valor){
            this._saldo-=valor
            return `Sucesso - Novo saldo: ${this._saldo}`
        }
    }
}

class contaEspecial1 extends contaCorrente1{
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

const conta3 = new contaCorrente1(100)
const conta4 = new contaEspecial1(500, 1000)

console.log(conta3.depositar(50))
console.log(conta3.sacar(50))
console.log(conta4.sacar(800))
console.log(conta4.sacar(800))
console.log(conta4.depositar(100))