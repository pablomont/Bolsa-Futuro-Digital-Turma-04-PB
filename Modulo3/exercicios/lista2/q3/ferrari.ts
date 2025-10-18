class Carro {
    nome: string = '';
    potencia: number = 0;
    velocidade: number = 0;
        acelerar(){
            this.velocidade += this.potencia
        }
        frear(){
            this.velocidade *= 0.5
        }
        velocidadeAtual(){
            console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade}`)
        }
}

const fusca = new Carro()
fusca.nome = 'fusca 1988'
fusca.potencia = 2

fusca.acelerar();
fusca.acelerar();
fusca.acelerar();

const ferrari = new Carro()
ferrari.nome = 'ferrari GTB'
ferrari.potencia = 15

ferrari.acelerar();
ferrari.frear();
ferrari.frear();

ferrari.velocidadeAtual()
fusca.velocidadeAtual()

if (ferrari.velocidade > fusca.velocidade) {
    console.log(`A ${ferrari.nome} está mais rápida.`);
} else if (fusca.velocidade > ferrari.velocidade) {
    console.log(`O ${fusca.nome} está mais rápido.`);
} else {
    console.log(`Os carros ${ferrari.nome} e ${fusca.nome} estão com a mesma velocidade.`);
}