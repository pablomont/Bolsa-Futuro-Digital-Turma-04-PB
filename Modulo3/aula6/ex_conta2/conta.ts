class ContaCorrente {

  private _saldo: number;

  constructor(saldo: number = 500) {
    this._saldo = saldo;
  }

  // getter protegido
  protected get saldo(): number {
    return this._saldo;
  }

  // setter protegido
  protected set saldo(valor: number) {
    this._saldo = valor;
  }

  // Novo Método protegido - regra básica de saque
  protected podeSacar(valor: number): boolean {
    return valor <= this._saldo;
  }

  // usa o podeSacar() e centraliza a lógica do saque
  public sacar(valor: number) {
    if (this.podeSacar(valor)) {
      this.saldo = this.saldo - valor;
      console.log(`Sucesso - Novo saldo: ${this.saldo}`);
    } else {
      console.log("Falha - Saldo insuficiente.");
    }
  }

  public depositar(valor: number) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Sucesso - Novo saldo: ${this._saldo}`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }
}

// Subclasse c/ regra de limite especial
class ContaEspecial extends ContaCorrente {
  constructor(public limite: number, saldoInicial: number = 500) {
    super(saldoInicial);
  }

  // lembrar - Sobrescreve apenas a regra de verificação (não o método sacar!)
  protected podeSacar(valor: number): boolean {
    return valor <= this.saldo + this.limite;
  }
}

// Teste
const contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800);   // Sucesso - Novo saldo: -300
contaEspecial.sacar(800);   // Falha - Saldo insuficiente
contaEspecial.depositar(100); // Sucesso - Novo saldo: -200
