class ContaCorrente{
 
 constructor (private _saldo: number = 500){}

    depositar(valor: number): void{
     this._saldo += valor;
     console.log(`Sucesso - novo saldo: ${this._saldo}`)
  }

    sacar(valor:number): void{
    if(valor <= this._saldo) {
     this._saldo -= valor;
     console.log(`sucesso - Novo saldo: ${this._saldo}`)
     } else{
        console.log (`Falha - Saldo Insificiente`)
     }
 }

 
    protected get saldo(){
        return this._saldo
    }

    protected set saldo(valor: number){
        this._saldo = valor

    }

}


class ContaEspecial extends ContaCorrente{
 limite: number = 1000;
 
sacar(valor: number): void {
    if(valor <= this.saldo + this.limite) {
        this.saldo -= valor;
        console.log(`Sucesso - novo saldo: ${this.saldo}`)
    } else {
     console.log(`Falha - saldo insuficiente`)
}
}
}

const conta = new ContaEspecial();
conta.sacar(800);
conta.sacar(800);
conta.depositar(100);