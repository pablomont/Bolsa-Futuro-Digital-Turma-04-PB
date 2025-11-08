class Pessoa {
    constructor(public nome: string, public idade: number) {}
}
const joao = new Pessoa('João', 15);
const maria = new Pessoa('Maria', 25);
const jose = new Pessoa('José', 30);

const pessoas: Pessoa[] = [joao, maria, jose];

const idadePessoas: number[] = []
//for (let pessoa of pessoas) {
  //idadePessoas.push(pessoa.idade);
//}

//metodo funcional pois espera uma funçao como argumento (função callback)  

//pessoas.forEach(function(pessoa: Pessoa) {
  //idadePessoas.push(pessoa.idade);
//});

//pessoas.forEach(pessoa => idadePessoas.push(pessoa.idade));
//console.log(idadePessoas);

//const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
//console.log(pessoasMaioresDeIdade);

const nomeDasPessoasMaioresDeIdade = pessoas
    .filter(pessoa => pessoa.idade >= 18)
    .map(pessoa => pessoa.nome);
console.log(nomeDasPessoasMaioresDeIdade);

const luis = new Pessoa('Luis', 17);
//const nome = luis.nome;
//  const idade = luis.idade;
const {nome, idade} = luis;