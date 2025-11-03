class Gato {
    static populacao: number = 0
    constructor(public nome: string){
        Gato.populacao++;
    }
}

const gato1 = new Gato('Garfield')
const gato2 = new Gato('Tim')

console.log(Gato.populacao)