var filmeDuna ={
    nome: 'Duna',
    ano: 2021,
    diretor: 'Denis Villeneuve',
    personagem: 'Paul Atreides'
}

//let filmes =['Star Wars', 'Matrix', 'O Senhor dos Anéis', filmeDuna,
//    function(){return "O filme foi lançado em: "+filmeDuna.ano}
//]

var filmes =['Star Wars', 'Matrix', 'O Senhor dos Anéis', filmeDuna,
    function(){return "O filme foi lançado em: "+filmeDuna.ano}
]

var exibeAno = filmes[4]
console.log(exibeAno())