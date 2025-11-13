class ContaCorrente {
  private _saldo: number;

  constructor(saldoInicial: number) {
    this._saldo = saldoInicial;
  }

  protected get saldo(): number {
    return this._saldo;
  }

  protected set saldo(valor: number) {
    this._saldo = valor;
  }

  protected podeSacar(valor: number): boolean {
    return this._saldo >= valor;
  }

  public sacar(valor: number): void {
    if (this.podeSacar(valor)) {
      this._saldo -= valor;
      console.log(`Sucesso - Novo saldo após o saque: ${this._saldo}`);
    } else {
      console.log("Erro - Saldo insuficiente para saque");
    }
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this._saldo += valor;
    }
  }
}

class ContaEspecial extends ContaCorrente {
  private limite: number;

  constructor(saldo: number = 0, limite: number = 0) {
    super(saldo);
    this.limite = limite;
  }

  protected podeSacar(valor: number): boolean {
    return this.saldo + this.limite >= valor;
  }
}

