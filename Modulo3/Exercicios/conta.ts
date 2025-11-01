class ContaCorrente {
  saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }


  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    
      return true; 
    }
    return false; 
  }
}
class ContaEspecial extends ContaCorrente {
  limite: number;

  constructor(saldoInicial: number, limite: number) {
    super(saldoInicial);
    this.limite = limite;
  }

   sacar(valor: number): boolean {
    if (valor<=this.saldo+this.limite){
        this.saldo -= valor;
          if (this.saldo<=0){
            this.limite+=this.saldo
           
          }
        return true;
    }
    return false}
}

const conta1 = new ContaCorrente(1000);
console.log("Saldo inicial conta1:", conta1.saldo); // 1000

conta1.depositar(500);
console.log("Após depósito de 500:", conta1.saldo); // 1500

let saque1 = conta1.sacar(200);
console.log("Saque de 200 realizado?", saque1); // true
console.log("Saldo após saque:", conta1.saldo); // 1300