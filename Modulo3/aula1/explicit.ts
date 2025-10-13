let greeting: string = "Hello, typscript";
greeting = '1';

let userCount: number = 42;
userCount = 43;

// let scores: number[] = [100, 95, 98] // declaração de array
let scores: (string | number) [] = [100, 95, 98, '']
scores.push('1')

//const carro:{
 //   marca: string,
 //   portas: number
//} = {
 //   marca: 'audi',
  //  portas: 4
//}
// obrigatório declarar tipo de parâmetros passado p/ as funções
//const carro = {
//    marca: 'audi',
 //   portas: 4
//}
//carro.portas = '1' // erro, dado deve ser number
