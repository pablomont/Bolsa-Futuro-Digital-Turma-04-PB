/*function soma(num1: number, num2: number): number{
    return num1+num2;
}

const soma=(num1: number, num2: number): number =>{
    return num1+num2;
}

const soma=(num1: number, num2: number): number =>num1+num2;//Uma função que retorna  a soma de dois números.
//Arrow para função
soma(1,2);*/
/*
for (let i=0; i<pessoas.length; i++){
    if(pessoas[i].idade>=18){
        console.log("É maior de idade. ");
    }
}*/
// 
// const idadePessoas: pessoas.map(pessoa) => pessoa.idadePessoas
// for(let pessoa of pessoas){
//     idadePessoas.push(pessoa.idade); 
// }
//forEach(Esperar que você passe uma função como argumento);
// 
// pessoas.forEach(function=(pessoa: Pessoa){
//  idadePessoas.push(pessoa.idade);
// })
// pessoas.forEach(pessoa=> idadePessoas.push(pessoa.idade));
// console.log(idadePessoas);
// const nomePessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade>18);
// .map(pessoa =>pessoas.nome);
// console.log(nomePessoasMaioresDeIdade);
// console.log(nomePessoasMaioresDeIdade);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
var joao = new Pessoa('João', 15);
var maria = new Pessoa('Maria', 25);
var jose = new Pessoa('Jose', 30);
var pessoas = [joao, maria, jose]; //Objeto
var luis = new Pessoa('Luis', 45);
console.log(pessoas);
var nome = luis.nome, idade = luis.idade;
/*
const ingredientesBase = ['massa', 'queijo'];
const adicionais = ['calabresa', 'tomate'];

const pizzaCompleta = [...ingredientesBase, ...adicionais, "orégano"];
console.log(pizzaCompleta)*/ 
