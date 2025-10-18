export {};

class carro{

    public potencia: number;
    public velocidade: number;
    public nome: string;

    constructor(potencia: number, velocidade: number, nome: string){
        this.potencia = potencia;
        this.velocidade = velocidade;
        this.nome = nome;
    }

    acelar(): number{
        return this.velocidade += this.potencia;
    }

    frear(): number{
        return this.velocidade *= 0.5;
    }

    exibirVelocidadeAtual(): string{
        return `O carro ${this.nome} está a ${this.velocidade} km/h`
    }
}

const fusca = new carro(2, 0, "Fusca 1988");
fusca.acelar();
fusca.acelar();
fusca.acelar();
console.log(fusca.exibirVelocidadeAtual());