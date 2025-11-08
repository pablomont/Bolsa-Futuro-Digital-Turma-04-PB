class ContaCorrente {
  
  private _saldo: number;

  constructor(saldo: number = 500) {
    this._saldo = saldo;
  }

  // getter protegido - leitura permitida apenas p/ subclasses
  protected get saldo(): number {
    return this._saldo;
  }

  // setter protegido - escrita permitida apenas p/ subclasses
  protected set saldo(valor: number) {
    this._saldo = valor;
  }

  depositar(valor: number) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Sucesso - Novo saldo: ${this._saldo}`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  sacar(valor: number) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`Sucesso - Novo saldo: ${this._saldo}`);
    } else {
      console.log("Falha - Saldo insuficiente.");
    }
  }
}

// Subclasse c/ acesso protegido ao saldo
class ContaEspecial extends ContaCorrente {
  constructor(public limite: number, saldoInicial: number = 500) {
    super(saldoInicial);
  }

  // Sobrescrita do método sacar
  sacar(valor: number) {
    if (valor <= this.saldo + this.limite) {
      // uso do setter protegido
      this.saldo = this.saldo - valor;
      console.log(`Sucesso - Novo saldo: ${this.saldo}`);
    } else {
      console.log("Falha - Saldo insuficiente.");
    }
  }
}

// Teste
const contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800);   // Sucesso - Novo saldo: -300
contaEspecial.sacar(800);   // Falha - Saldo insuficiente
contaEspecial.depositar(100); // Sucesso - Novo saldo: -200
