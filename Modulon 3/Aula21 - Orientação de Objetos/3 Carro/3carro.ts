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

const ferrari = new Carro()
ferrari.nome = "Ferrari GTB";
ferrari.potencia = 15;

ferrari.acelerar ();
ferrari.frear ();
ferrari.frear ();

ferrari.exibirVelocidadeAtual();

// Comparando velocidades
if (fusca.velocidade > ferrari.velocidade) {
    console.log(`${fusca.nome} é mais rápido que ${ferrari.nome}.`);
} else if (fusca.velocidade < ferrari.velocidade) {
    console.log(`${ferrari.nome} é mais rápido que ${fusca.nome}.`);
} else {
    console.log(`${fusca.nome} e ${ferrari.nome} estão com a mesma velocidade.`);
}