class Gato {
    static populacao: number = 0
    constructor(public nome: string){
        //'Gato.populacao' se refere à CLASSE
        Gato.populacao++
    }
}

const gato1 = new Gato('Garfield')
const gato2 = new Gato('tom')
console.log(Gato.populacao)
