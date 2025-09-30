const filmeDuna = {
    nome: 'duna',
    ano: 2002,

}

let filmes = ["Iron man 2", "iron man 3", filmeDuna, function filme (filme){ return (`O filme ${filme} é bom`), filme => `O ${filme.nome} é ruim`}]

filmes.pop();


console.log(filmes[0] + " is better then " + filmes[1] + " and " + filmes[2].nome)
console.log("O filme " + filmes[2].nome + " foi lançado em " + filmes[2].ano)
console.log(filmes[3](filmeDuna.nome))
console.log(filmes[4].filme(titanic))
