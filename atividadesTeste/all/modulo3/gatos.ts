class gato {
    static populacao: number = 0
    constructor(public nome: string){
        gato.populacao++
    }
}

console.log(gato.populacao)
const gato1 = new gato("Garfield")
// dot notation de algum static só pode ser usado na classe e não no objeto
console.log(gato.populacao)
const gato2 = new gato("Gatu")
const gato3 = new gato("Mickey")
const gato4 = new gato("Minnie")
console.log(gato.populacao)