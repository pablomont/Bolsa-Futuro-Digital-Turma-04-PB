class ContaCorrente{
    saldo: number = 0

    constructor(saldo: number = 0){
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
        console.log(`SUCESSO - Novo saldo: ${this.saldo}`);
    }

    sacar(valor: number) {
        if (valor > this.saldo) {
            console.log(`FALHA - Saldo insuficiente. Você tem ${this.saldo} e tentou sacar ${valor}`);
        } else {
            this.saldo -= valor;
            console.log(`SUCESSO - Você sacou ${valor}. Novo saldo: ${this.saldo}`);
        }
    }
}
class ContaEspecial extends ContaCorrente{
    limite: number = 0

    constructor (limite:number, saldo: number){
        super(saldo);
        this.limite = limite;
    }
    
    sacar(valor:number){
        const saldoDisp = this.saldo + this.limite;

        if (valor > saldoDisp){
            console.log(`FALHA - Limite insuficiente.`)
        }
        else {
            this.saldo -= valor;
            console.log(`SUCESSO - Você sacou ${valor} e seu novo saldo é: ${this.saldo}`)
        }
    }
}

const conta = new ContaEspecial(1000, 500)

conta.sacar(800) // Saída: -300
conta.sacar(800) // saída: falha
conta.depositar(100) // saída: -200