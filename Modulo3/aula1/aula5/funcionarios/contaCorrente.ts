class ContaCorrente{
   constructor(public saldo: number = 500){}
    
   depositar(valor: number){
        this.saldo= this.saldo+valor;
        console.log("Sucesso - Novo Saldo: " , this.saldo)
    }
    
    sacar(valor: number){
        if(this.saldo>=valor){
        this.saldo= this.saldo-valor;
        }
    }
}
class ContaEspecial extends ContaCorrente{
    constructor(public limite: number){
        super();
    }
    sacar(valor: number){
        if(this.saldo+this.limite>=valor){
            this.saldo-=valor;
            console.log("Sucesso - novo saldo", this.saldo);
        }
        else {
        console.log("Falha - saldo Insuficiente")
        }
    }}


    const contaEspecial = new ContaEspecial(1000);

    contaEspecial.sacar(800);
    contaEspecial.sacar(800);
    contaEspecial.depositar(100);
