class ContaCorrente {

    constructor(public saldo: number){
        this.saldo =  saldo;
    }
    depositar(valor: number){
        this.saldo += valor
    }
    
    sacar(valor:number ){
        if(this.saldo >= valor){
        this.saldo -= valor
        }
    }

}



class ContaEspecial extends ContaCorrente {
    limite:number;
    
    construtor(saldo: number,
        limite: number){
            super.saldo;
            this.limite = limite;
        }
          sacar(valor:number ){
        if(this.saldo >= valor){
        this.saldo -= valor
        }
    }

}
// const conta Especial = new ContaEspecial(1000)
// contaEspecial.sacar(800) // sucesso - novo saldo = -300
// contaEspecial.sacar(800) // falha - saldo insuficiente
// contaEspecial.depositar(100) // sucesso - novo saldo = -200
