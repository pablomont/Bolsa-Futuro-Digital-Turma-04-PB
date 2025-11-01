class Gato {
    static populacao: number = 0;
    constructor(private nome: string){
        Gato.populacao++
    }

    setNome(nome:string){
        
    }
}

const gato1 = new Gato('romerito');
const gato2 = new Gato('dollinho');

console.log(Gato.populacao)
