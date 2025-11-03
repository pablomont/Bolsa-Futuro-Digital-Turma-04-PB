class ContaCorrente{
    constructor(public saldo: number = 500){}
    depositar(valor: number){
        this.saldo += valor
    }
    sacar(valor:number){
        
    }
}

class ContaEspecial extends ContaCorrente{
   
}

const contaEspecial = new ContaEspecial(1000)
contaEspecial.sacar(800)
contaEspecial.sacar(800) 
contaEspecial.depositar(100) 