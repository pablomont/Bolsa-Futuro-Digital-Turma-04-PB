class ContaCorrente{
    saldo: number = 0

    constructor(saldo: number = 0){}

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

    constructor (limite:number){
        super()
    }
    sacar(valor:number){
        if (valor > this.saldo && (this.saldo + this.limite) > valor){ // usa o limite
            const novoLimite = (this.saldo + this.limite) - valor;
            console.log(`SUCESSO -Você sacou ${valor} utilizando seu limite e seu novo limite é ${novoLimite}`)
        }
        else if (this.saldo < 0){
            console.log("FALHA - Saldo insuficiente")
        }
        else { // nao usa o limite
            this.saldo -= valor
            console.log(`SUCESSO - Você sacou ${valor} e seu novo saldo é ${this.saldo}`)
        }
    }

    depositar(valor:number){
        this.saldo += valor;
        console.log(`SUCESSO - Novo saldo : ${this.saldo}`)
    }
}

const conta = new ContaEspecial(1000)
conta.saldo = 500;

conta.sacar(800)
conta.sacar(800)
conta.depositar(100)