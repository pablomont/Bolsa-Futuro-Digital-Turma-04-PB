// function soma(num1: number, num2: number): number{
//     return num1+num2;
// }
// const soma = (num1: number, num2: number): number =>{
//     return num1+num2;
// }
// const soma = (num1: number, num2: number) => num1+num2
// soma(1,2)
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
var joao = new Pessoa('Joao', 15);
var maria = new Pessoa('Maria', 25);
var jose = new Pessoa('Jose', 30);
var pessoas = [joao, maria, jose];
// for clássico - C like
// for(let i= 0; i < pessoas.length; i++){
//     if(pessoas[i].idade > 18){
//         console.log('é maior de idade')
//     }
// } 
//const idadePessoas: number[] = []
// for(let pessoa of pessoas){
//     idadePessoas.push(pessoa.idade)
// }
// pessoas.forEach(function(pessoa: Pessoa){
//     idadePessoas.push(pessoa.idade)
// })
// pessoas.forEach((pessoa: Pessoa)=>{
//     idadePessoas.push(pessoa.idade)
// })
//pessoas.forEach(pessoa => idadePessoas.push(pessoa.idade))
//console.log(idadePessoas)
// const idadePessoas = pessoas.map(pessoa => pessoa.idade)
// console.log(idadePessoas)
// const pessoasMaioresDeIdade2 = []
// for(let pessoa of pessoas){
//     if(pessoa.idade > 18){
//         pessoasMaioresDeIdade2.push(pessoa)
//     }
// }
// const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade > 18)
// console.log(pessoasMaioresDeIdade)
var nomePessoasMaioresDeIdade = pessoas.filter(function (pessoa) { return pessoa.idade > 18; }).map(function (pessoa) { return pessoa.nome; });
console.log(nomePessoasMaioresDeIdade);
var luis = new Pessoa('luis', 45);
// const nome = luis.nome
// const idade = luis.idade
var nome = luis.nome, idade = luis.idade;
