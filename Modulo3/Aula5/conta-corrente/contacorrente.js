class ContaCorrente {
  constructor() {
    this.salario = 0;
  }

  depositar(valor) {
    this.salario += valor;
    console.log(`Sucesso - novo saldo: ${this.salario}`);
  }

  sacar(valor) {
    if (valor <= this.salario) {
      this.salario -= valor;
      console.log(`Sucesso - novo saldo: ${this.salario}`);
    } else {
      console.log("Falha - saldo insuficiente");
    }
  }
}

class ContaEspecial extends ContaCorrente {
  constructor() {
    super();
    this.limite = 1000;
  }

  sacar(valor) {
    if (valor <= this.salario + this.limite) {
      this.salario -= valor;
      console.log(`Sucesso - novo saldo: ${this.salario}`);
    } else {
      console.log("Falha - saldo insuficiente");
    }
  }
}

// ---- Testes ----
const conta1 = new ContaCorrente();
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(600);

const conta2 = new ContaEspecial();
conta2.sacar(500);
conta2.depositar(700);
