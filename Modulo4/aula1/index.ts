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

class Pessoa{
    constructor(public nome: string, public idade: number){}
}

 const joao = new Pessoa('João', 15);
 const maria = new Pessoa('Maria', 25);
 const jose = new Pessoa('Jose', 30);

const pessoas: Pessoa[] = [joao, maria, jose]; //Objeto
const luis = new Pessoa('Luis', 45);

console.log(pessoas);
const{nome, idade}= luis

/*
const ingredientesBase = ['massa', 'queijo'];
const adicionais = ['calabresa', 'tomate'];

const pizzaCompleta = [...ingredientesBase, ...adicionais, "orégano"];
console.log(pizzaCompleta)*/