class ContaCorrente{
    constructor(public saldo:number=500){}

    depositar(valor:number){
        this.saldo+=valor;
        console.log("Sucesso - novo saldo", this.saldo)
    }

    sacar(valor:number){
        if(this.saldo>=valor){
            this.saldo-=valor;
        }
    }
}

class ContaEspecial extends ContaCorrente{
    constructor(public limite:number){
        super();
    }
    sacar(valor:number){
        if(this.saldo+this.limite>=valor){
            this.saldo-=valor;
            console.log("Sucesso - novo saldo", this.saldo);
        }else{
        console.log("Falha - saldo insuficiente.")
        }
    }
}

const contaEspecial = new ContaEspecial(1000);

contaEspecial.sacar(800);  //sucesso novo saldo = -300
contaEspecial.sacar(800)  // falha - saldo insuciente
contaEspecial.depositar(100) // Sucesso (Novo saldo: -200)



