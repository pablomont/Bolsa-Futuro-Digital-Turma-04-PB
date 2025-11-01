class Gato {
    static população: number = 0 
    constructor(public nome: string){}
}

const gato1 = new Gato('garfield')
console.log(Gato.população)