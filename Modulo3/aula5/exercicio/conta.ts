class ContaCorrente{
    
    constructor(public saldo: number = 0){}

    depositar(valor: number){
       this.saldo  += valor
       console.log(`Sucesso - Novo saldo após deposito: ${this.saldo}`)
    }

    sacar(valor:number){
        if (this.saldo >= valor){
            this.saldo -= valor
            console.log(`Sucesso - Novo saldo após o saque: ${this.saldo}`)
        } else {
            console.log("Erro - Saldo insuficiente para saque");
        }
    }

}

class ContaEspecial extends ContaCorrente {
    constructor(saldo: number = 0, public limite: number = 0) {
        super(saldo);
    }

    sacar(valor: number) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            console.log(`Sucesso - Novo saldo após o saque: ${this.saldo}`)
        }  else {
            console.log("Erro - Saldo insuficiente para saque");
        }
    }
}


const conta = new ContaEspecial(500, 1000);

conta.sacar(800)
conta.sacar(800)
conta.depositar(100)
