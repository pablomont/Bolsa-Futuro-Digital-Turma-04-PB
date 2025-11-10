class ContaCorrente{
    constructor(private _saldo:number=500){}

    depositar(valor:number){
        this._saldo+=valor;
        console.log("Sucesso - novo saldo", this._saldo)
    }

    public sacar(valor:number){
        if(this.podeSacar(valor)){
            this._saldo-=valor;
            console.log("Sucesso - novo saldo", this._saldo)
        }else{
            console.log("Falha - saldo insuficiente.")
        }
    }
    get saldo(){
        return this._saldo; 
    }
    set saldo(valor: number){
        this._saldo = valor;
    }
    protected podeSacar(valor: number){
        if(this._saldo>=valor){
            return true;
        }else{
            return false;
        }
    }
}


class ContaEspecial extends ContaCorrente{
    constructor(public limite:number){
        super();
    }
    protected podeSacar(valor: number){
        const saldoDisponivel = this.saldo + this.limite;
        return saldoDisponivel >= valor;
        
    }
}

const contaEspecial = new ContaEspecial(1000);

contaEspecial.sacar(800);  //sucesso novo saldo = -300
contaEspecial.sacar(800)  // falha - saldo insuciente
contaEspecial.depositar(100) // Sucesso (Novo saldo: -200)



