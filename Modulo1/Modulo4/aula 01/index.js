"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const soma = (num1: number, num2: number) => num1+num2
//soma(1,2)
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const joao = new Pessoa('joao', 15);
const maria = new Pessoa('maria', 25);
const jose = new Pessoa('jose', 30);
const pessoas = [joao, maria, jose];
// // c like
// for(let i = 0; i < pessoa.length; i++){
//     Pessoa[i]
// }
// // const idadePessoas = number[] = []
// // for(let pessoa of pessoa) {
// //     idadePessoas.push(pessoa.idade)
// //  }
//  //pessoas.forEach(pesso => idadePessoa.push(pessoas.idade))
// pessoas.map(pessoa => pessoa.idade)
// console.log(idadePessoas)
const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade > 18)
    .map(pessoa => pessoa.nome);
console.log(pessoasMaioresDeIdade);
const luis = new Pessoa('luis', 40);
// const nome = luis
//# sourceMappingURL=index.js.map