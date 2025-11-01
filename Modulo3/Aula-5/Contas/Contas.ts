class ContaCorrente{
    constructor (public saldo: number){}

    depositar(valor: number){
        this.saldo += valor
        console.log (`Sucesso! seu saldo é: ${this.saldo}`)
    }
    sacar(valor: number){
        if (this.saldo >= valor){
            this.saldo -= valor;
            console.log (`Sucesso! seu saldo é: ${this.saldo}`)
        }
        else {
            console.log ("Falha - saldo insuficiente.")
        }
    }

}

class ContaEspecial extends ContaCorrente{
    constructor (public limite: number, saldo: number){
        super(saldo)
    }

    sacar(valor: number){
        if ((this.saldo + this.limite) >= valor){
            this.saldo -= valor;
            console.log (`Sucesso! seu saldo é: ${this.saldo}`)
        }
        else {
            console.log ("Falha - saldo insuficiente.")
        }
    }
}

const contaEspecial = new ContaEspecial(1000, 500)
contaEspecial.sacar(800)
contaEspecial.sacar(800)
contaEspecial.depositar(100)