class ContaCorrente{
 saldo: number = 500;

  depositar(valor: number): void{
     this.saldo += valor;
     console.log(`Sucesso - novo saldo: ${this.saldo}`)
  }
 sacar(valor:number): void{
    if(valor <= this.saldo) {
     this.saldo -= valor;
     console.log(`sucesso - Novo saldo: ${this.saldo}`)
     } else{
        console.log (`Falha - Saldo Insificiente`)
     }
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
