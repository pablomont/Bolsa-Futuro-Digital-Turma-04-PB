class Carro {
    //criando classe com valores padrão de inicialização
    potencia: number = 0;
    velocidade: number = 0;
    nome: string = '';

    //criando comportamentos da classe: funções/métodos

    acelerar() {
        this.velocidade += this.potencia //velocidade = velocidade + potencia
    }

    frear() {
        this.velocidade *= 0.5 //velocidade = velocidade * 0.5
    }

    exibirVelocidadeAtual() {
        console.log(`A velocidade atual do carro ${this.nome} é ${this.velocidade} km/h`)
    }

    carroMaisRapido(car1: Carro) 
    {
        if (car1.velocidade > this.velocidade) {
            console.log(`O carro mais rápido é o ${car1.nome} com velocidade de ${car1.velocidade} km/h`)
        } else if (this.velocidade > car1.velocidade) {
            console.log(`O carro mais rápido é o ${this.nome} com velocidade de ${this.velocidade} km/h`)
        } else {
            console.log(`Os dois carros estão com a mesma velocidade de ${car1.velocidade} km/h`)
        }
    }
}
const fusca = new Carro()
fusca.nome = "Fusca 1988"
fusca.potencia = 2
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

fusca.exibirVelocidadeAtual()

const ferrari = new Carro()
ferrari.nome = "Ferrari GTB"
ferrari.potencia = 15
ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.exibirVelocidadeAtual()

ferrari.carroMaisRapido(fusca)
