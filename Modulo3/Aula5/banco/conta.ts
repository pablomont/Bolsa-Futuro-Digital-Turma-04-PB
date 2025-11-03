class ContaCorrente {
  constructor(public saldo: number) {
    this.saldo = saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
    console.log('Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}');
  }

  sacar(valor: number) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log('Sucesso - Novo Saldo: ${this.saldo}');
    } else {
      console.log('Falha - Saldo insuficiente');
    }
  }
}

class ContaEspecial extends ContaCorrente {
  limite: number;

  constructor(saldo: number, limite: number) {
    super(saldo);
    this.limite = limite;
  }

  sacar(valor: number) {
    if (this.saldo + this.limite >= valor) {
      this.saldo -= valor;
      console.log('Sucesso - Novo Saldo: ${this.saldo}');
    } else {
      console.log('Falha - Limite insuficiente');
    }
  }
}

const contaEspecial = new ContaEspecial(1000, 500);
contaEspecial.sacar(1300);
contaEspecial.sacar(300);
contaEspecial.depositar(100);