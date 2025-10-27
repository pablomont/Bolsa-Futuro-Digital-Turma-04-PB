class Carro {

    constructor(public painel:string ,public nome:string, public velocidade:number, public potencia: number){
  }

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

//Fusca
const fusca = new Carro('Fusca 1998', 2, 0)


fusca.acelerar ();
fusca.acelerar ();
fusca.acelerar ();
fusca.painel.exibir();

fusca.exibirVelocidadeAtual();

//Ferrari
const ferrari = new Carro('Ferrari GTB', 15, 0)

ferrari.acelerar ();
ferrari.frear ();
ferrari.frear ();
ferrari.painel.exibir();

ferrari.exibirVelocidadeAtual();

// Comparando velocidades
if (fusca.velocidade > ferrari.velocidade) {
    console.log(`${fusca.nome} é mais rápido que ${ferrari.nome}.`);
} else if (fusca.velocidade < ferrari.velocidade) {
    console.log(`${ferrari.nome} é mais rápido que ${fusca.nome}.`);
} else {
    console.log(`${fusca.nome} e ${ferrari.nome} estão com a mesma velocidade`);
}