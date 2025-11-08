class ContaCorrente{

    constructor(protected _saldo: number = 0){
        this._saldo = _saldo;
    }

    depositar(valor: number) {
        this._saldo += valor;
        console.log(`SUCESSO - Novo saldo: ${this._saldo}`);
    }

    public sacar(valor: number) {
        if (valor > this._saldo) {
            console.log(`FALHA - _saldo insuficiente. Você tem ${this._saldo} e tentou sacar ${valor}`);
        } else {
            this._saldo -= valor;
            console.log(`SUCESSO - Você sacou ${valor}. Novo _saldo: ${this._saldo}`);
        }
    }

    protected imprimirSaque(valor: number): void{ //pra n repetir o print, ai usa dentro do sacar
        if (this._saldo >= valor) {
            console.log(`SUCESSO - Você sacou ${valor}. Novo _saldo: ${this._saldo}`);
        }
        else {
            console.log(`FALHA - Saldo insuficiente, você tem ${this._saldo}.`);
        }
    }

    protected get saldo (): number {
        return this._saldo;
    }
    protected set saldo (valor: number) {
        this._saldo = valor;
    }

    protected podeSacar(valor: number): boolean{
        if (valor <= this._saldo){
            return true;
        }
        else {
            return false;
        }
    }
}

class ContaEspecial extends ContaCorrente{
    limite: number = 0

    constructor (limite:number, _saldo: number){
        super(_saldo);
        this.limite = limite;
    }
    
    sacar(valor:number){
        const saldoDisp = this._saldo + this.limite;

        if (valor > saldoDisp){
            console.log(`FALHA - Limite insuficiente.`)
        }
        else {
            this._saldo -= valor;
            console.log(`SUCESSO - Você sacou ${valor} e seu novo saldo é: ${this._saldo}`)
        }
    }

    protected imprimirSaque(valor: number): void {
        if (this.saldo + this.limite >= valor) {
            console.log(`SUCESSO - Você sacou ${valor}. Novo saldo: ${this._saldo}`);
        }
        else {
            console.log(`FALHA - Saldo insuficiente, você tem ${this._saldo}.`);
        }
    }
}

const conta = new ContaEspecial(1000, 500)

conta.sacar(800) // Saída: -300
conta.sacar(800) // saída: falha
conta.depositar(100) // saída: -200