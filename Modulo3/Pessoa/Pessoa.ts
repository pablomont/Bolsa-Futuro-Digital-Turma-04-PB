class Pessoa {
    constructor(public nome: string, public idade: number) {

    }
}

const joao: Pessoa = new Pessoa("joao", 22);
const carlos: Pessoa = new Pessoa("miguel", 17);
const alonso: Pessoa = new Pessoa("Alonso", 19);

const pessoas: Pessoa[] = [joao, carlos, alonso];
// const idadePessoas:number[] =[]

//forEach normal
/*

pessoas.forEach(function(pessoa:Pessoa){
    idadePessoas.push(pessoa.idade);
});
*/

/* forEach
pessoas.forEach(pessoa => idadePessoas.push(pessoa.idade);
)
console.table(idadePessoas);
*/

const idadePessoas: number[] = pessoas.map(pessoa => pessoa.idade);
console.table(idadePessoas);

// const pessoasMaioresdeIdade = pessoas.filter( pessoa => pessoa.idade > 18)
// console.table(pessoasMaioresdeIdade)

const nomePessoasMaioresdeIdade = pessoas.filter(pessoa => pessoa.idade > 18)
                                         .map(pessoa => pessoa.nome);

console.table(nomePessoasMaioresdeIdade)

const luis = new Pessoa("luis", 45);
const { nome, idade } = luis;

