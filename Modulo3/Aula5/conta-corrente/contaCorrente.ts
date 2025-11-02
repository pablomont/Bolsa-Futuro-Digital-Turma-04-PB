class ContaCorrente{
    constructor(public saldo: number = 500){}
    depositar(valor: number){
        this.saldo += valor
    }
    sacar(valor:number){
        //verificar se tem saldo disponivel
        //se sim remove valor do saldo
    }
}

class ContaEspecial extends ContaCorrente{
    //implementar o constructor com seus atributos
    //lembrar de chamar o super()
}

const contaEspecial = new ContaEspecial(1000)
contaEspecial.sacar(800) // sucesso - novo saldo = -300
contaEspecial.sacar(800) // falha - saldo insuficiente
contaEspecial.depositar(100) //sucesso - novo saldo = -200 