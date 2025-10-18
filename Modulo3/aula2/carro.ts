class Carro {
    nome: string = ''
    potencia: number = 0
    velocidade: number = 0

    acelerar(){
        this.velocidade += this.potencia // velocidade = velocidade + potencia
    }

    frear (){
        this.velocidade *= 0.5 // velocidade = velocidade * 0.5
    }

    exibirVelocidadeAtual(){
        console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade} km/h`)
    }
}

const fusca = new Carro()
fusca.nome = 'Fusca 1988'
fusca.potencia = 2

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.exibirVelocidadeAtual()

const ferrari = new Carro()
ferrari.potencia = 15
ferrari.nome = 'Ferrari GTB'

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.exibirVelocidadeAtual()

if (fusca.velocidade > ferrari.velocidade) {
    console.log(`O carro ${fusca.nome} está com a maior velocidade.`)
} else if (ferrari.velocidade > fusca.velocidade) {
    console.log(`O carro ${ferrari.nome} está com a maior velocidade.`)
} else {
    console.log(`Os dois carros estão com a mesma velocidade.`)
}
