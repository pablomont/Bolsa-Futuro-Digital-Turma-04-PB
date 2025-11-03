class ContaCorrente {
  constructor(private _saldo: number) {
    this._saldo = _saldo;
  }

  depositar(valor: number) {
    this._saldo += valor;
    console.log('Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}');
  }

  sacar(valor: number) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      console.log('Sucesso - Novo Saldo: ${this.saldo}');
    } else {
      console.log('Falha - Saldo insuficiente');
    }
  }
  get saldo(){
    return this._saldo
  }
  set saldo(valor: number){
    this._saldo = valor
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