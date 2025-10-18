
class Carro {
    potencia: number = 2;
    velocidade: number = 0;
    nome: string = "";

    acelerar(){
        this.velocidade += this.potencia;
    }
    frear(){
        this.velocidade *= 0.5;
    }
    exibirVelocidadeAtual(){
        console.log(`O carro ${this.nome} está a ${this.velocidade} km/h`)
    }
    informarStatus(){
        console.log(`O carro ${this.nome} está a ${this.velocidade} km/h`)
    }
}

const fusca = new Carro();
fusca.nome = "Fusca 1988";
fusca.potencia = 2;
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.exibirVelocidadeAtual();


const ferrari = new Carro();
ferrari.nome = "Ferrari GTB";
ferrari.potencia = 15;
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.informarStatus();

if (ferrari.velocidade > fusca.velocidade){
    console.log(`A ferrari está mais rápida, com ${ferrari.velocidade} km/h`)
}
else{
    console.log(`O fusca está mais rápido, com ${fusca.velocidade} km/h`)
}
