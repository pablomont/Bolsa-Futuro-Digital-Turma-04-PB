//Criando uma variavél do tipo explicito em TypeScript. Que é um JavaScript typado. Ele ainda é transpilado para Js
let greeting: string = "Hello, typescript"//Declaração do tipo string
greeting = '1'; 

let userCount: number=42;//Declaração tipo number

userCount=1;
//userCount='a';-> erro, pois o userCount é um dado do tipo number e não um dado do tipo string

let scores: number[]=[10,20,30];//declaração de um array 
scores.push(10);
/*
const carro:{
    marca: string,
    portas: number
}={
    marca:'audi', 
    portas:4 //Dando erro por que estou colocando um dado do tipo string e ele só vai armazenar dado do tipo number

}
};*/
const carro={
    marca: 'audi',
    portas: 4
}

carro.portas=1; //Não dar erro por que o mesmo tipo de dado.

//carro.portas='1'; -> Outro erro porque o dado deve ser number
//É obrigatório que haja a declaração dos tipos de parâmetros que serão passados para as funções.

