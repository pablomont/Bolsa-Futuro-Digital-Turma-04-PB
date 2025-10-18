
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

const ferrari = new carro(15, 0, "Ferrari GTB");
ferrari.acelar();
ferrari.frear();
ferrari.frear();

console.log(ferrari.exibirVelocidadeAtual());

if(ferrari.velocidade > fusca.velocidade){
    console.log(`A ${ferrari.nome} está mais rápida que o ${fusca.nome}`);
} else if(ferrari.velocidade < fusca.velocidade){
    console.log(`O ${fusca.nome} está mais rápido que a ${ferrari.nome}`);
} else {
    console.log(`Os dois carros estão na mesma velocidade`);
}