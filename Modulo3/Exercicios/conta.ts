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
        return true;
    }
    return false}
}
