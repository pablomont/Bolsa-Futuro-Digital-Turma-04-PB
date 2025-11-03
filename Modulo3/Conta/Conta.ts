class ContaCorrente {
    constructor (protected _saldo:number){}

    depositar(valor:number){
        this._saldo += valor;
        console.log(`sucesso - novo saldo: ${this._saldo}`);
    }


    sacar(valor:number){
        if(this.podeSacar(valor)){
            this._saldo -= valor;
            console.log(`sucesso - novo saldo: ${this._saldo}`);
        } else {
            console.log("Falha - saldo insuficiente");
        }
    }

    protected get saldo(){
        return this._saldo;
    }

    protected set saldo(valor:number){
        this.saldo = valor;
    }   

    protected podeSacar(valor:number){
         if(this._saldo >= valor){
            return true
        } else {
            return false
        }
    }

}

class ContaEspecial extends ContaCorrente {
    constructor (public limite:number, saldo:number){
        super(saldo);
    }
    protected podeSacar(valor: number) {
         if((this._saldo + this.limite) >= valor){
            return true
        } else {
            return false
        }
    }

}

const contaEspecial = new ContaEspecial(1000, 500);
contaEspecial.sacar(800);
contaEspecial.sacar(800);
contaEspecial.depositar(100);