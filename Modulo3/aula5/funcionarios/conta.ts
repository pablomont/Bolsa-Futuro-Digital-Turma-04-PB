class ContaCorrente {
  constructor(public saldo: number = 500) {}

  depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Sucesso (Novo Saldo: ${this.saldo}`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  // Método p/ sacar
  sacar(valor: number) {
    //verificar se tem saldo disponivel
    //se sim 
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Sucesso - Novo saldo: ${this.saldo}`);
    } else {
      console.log("Falha - Saldo insuficiente");
    }
  }
}

class ContaEspecial extends ContaCorrente {
    //implementar o construtor e seus atributos
    // lembrar de chamar o super
  constructor(public limite: number) {
    super(); // chama o construtor da superclasse
  }

  // Sobrescrita do método sacar
  sacar(valor: number) {
    if (valor <= this.saldo + this.limite) {
      this.saldo -= valor;
      console.log(`Sucesso - Novo Saldo: ${this.saldo}.`);
    } else {
      console.log("Falha - Saldo insuficiente.");
    }
  }
}

// Teste
const contaEspecial = new ContaEspecial(1000);
contaEspecial.sacar(800); // sucesso - novo saldo = -300
contaEspecial.sacar(800); //falha - saldo insuficiente
contaEspecial.depositar(100);  //sucesso - novo saldo = -200
