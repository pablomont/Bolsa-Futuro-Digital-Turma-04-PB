/*correção, resultado esperado:
sucesso - novo saldo: -300 
falha - saldo insuficiente 
sucesso (novo saldo): -200
*/

class ContaCorrente{
 salario: number = 0;

  depositar(valor: number): void{
     this.salario += valor;
     console.log(`Sucesso - novo saldo: ${this.salario}`)
  }
 sacar(valor:number): void{
     this.salario -= valor;
 }
}


class ContaEspecial extends ContaCorrente{
 limite: number = 1000;
 
sacar(valor: number): void {
    if(valor <= this.salario + this.limite) {
        this.salario += valor;
        console.log(`Sucesso - sucesso novo saldo: ${this.salario}`)
    } else {
     console.log(`Falha - salado insuficiente`)
}
}
}

const conta1 = new ContaCorrente();
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(600);

const conta2 = new ContaEspecial();
conta2.sacar(500);
conta2.depositar(700);
