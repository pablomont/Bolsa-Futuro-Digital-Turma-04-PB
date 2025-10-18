class carro{
    nome: string = ''
    potencia: number = 0
    velocidade: number = 0

    acelerar(){
        this.velocidade += this.potencia 
    }

    frear(){
        this.velocidade *= 0.5
    }

    exibirVelocidadeAtual(){
        console.log(`A velocidade atual do carro ${this.nome}é de ${this.velocidade} km/h`)

    }
}

const fusca = new carro()
fusca.nome = 'fusca 1988'
fusca.potencia = 2 

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.exibirVelocidadeAtual()

const ferrari = new carro()
ferrari.potencia = 15
ferrari.nome = 'Ferrari GTB'

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.exibirVelocidadeAtual()

if (fusca.velocidade > ferrari.velocidade){
    console.log ('A velocidade da ferrari é maior')

} else {
    console.log ('A velocidade do fusca é maior')
}
    