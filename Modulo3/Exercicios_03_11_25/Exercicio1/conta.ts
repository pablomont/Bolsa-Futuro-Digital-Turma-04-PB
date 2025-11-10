class contaCorrente1{

    constructor(protected _saldo: number = 0){
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

    protected podeSacar(valor: number): boolean{
        return this._saldo >= valor
    }

    sacar(valor:number){
        if(this.podeSacar(valor)){
            this._saldo-=valor
            return `Sucesso - Novo saldo: ${this._saldo}`
        }
        else{
            return 'Falha - Saldo insuficiente'
        }
    }
}

class contaEspecial1 extends contaCorrente1{

    constructor(saldo: number =0, protected limite:number =0){
        super(saldo)
    }

    protected podeSacar(valor: number): boolean {
        return this.saldo + this.limite >= valor
    }
}

const conta3 = new contaCorrente1(100)
const conta4 = new contaEspecial1(500, 1000)

console.log(conta3.depositar(50))
console.log(conta3.sacar(50))
console.log(conta4.sacar(800))
console.log(conta4.sacar(800))
console.log(conta4.depositar(100))