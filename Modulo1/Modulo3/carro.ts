class Carro {
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
        console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade} km/h`)
    }
}

const fusca = new Carro()
fusca.nome = 'fusca 1988'
fusca.potencia = 2

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.exibirVelocidadeAtual()

const ferrari = new Carro()
ferrari.potencia = 15 
ferrari.nome = 'Ferraro GTB'
ferrari.potencia = 1

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.exibirVelocidadeAtual()

if(ferrari.velocidade > fusca.velocidade){
    console.log(' A velocidade da ferrai é maior')
} else {
    console.log (' A velocidade do fusca é maior')
}



