class Gato {
    static populacao: number = 0;
    constructor(public nome: string) {
        // 'Gato.populacao' se refere à CLASSE
        Gato.populacao++;
    }

    miar(){
        console.log('miau')
    }
}

// 1. Acessando o atributo ESTÁTICO antes de criar qualquer gato
console.log(`População inicial de gatos: ${Gato.populacao}`); // Saída: 0

// 2. Criando instâncias
const frajola = new Gato("Frajola");
console.log(`População agora: ${Gato.populacao}`); // Saída: 1

const garfield = new Gato("Garfield");
console.log(`População agora: ${Gato.populacao}`); // Saída: 2

const tom = new Gato("Tom");
console.log(`População agora: ${Gato.populacao}`); // Saída: 3


frajola.miar(); 
garfield.miar();

console.log(frajola.populacao); // ERRO! Propriedade 'populacao' é estática.