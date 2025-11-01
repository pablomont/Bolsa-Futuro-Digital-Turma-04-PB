class Gato {
    static populaçao: Number = 0
    constructor(public nome:  string){
        Gato.populaçao
    }     
}
    const gato1 = new Gato("garfield");
    const gato2 = new Gato("tom")

    console.log(Gato.populaçao)