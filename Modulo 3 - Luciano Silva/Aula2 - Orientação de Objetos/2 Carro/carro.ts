class Carro {
    nome: string
    potencia: number = 0;
    velocidade: number = 0;

    acelerar() {
        this.velocidade += this.potencia;
    }

    frear() {
        this.velocidade *= 0.5;
    }

    exibirVelocidadeAtual (){
        console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade}`);
    }
}

const fusca = new Carro()
fusca.nome = "Fusca 1998";
fusca.potencia = 2;

fusca.acelerar ();
fusca.acelerar ();
fusca.acelerar ();

fusca.exibirVelocidadeAtual();

