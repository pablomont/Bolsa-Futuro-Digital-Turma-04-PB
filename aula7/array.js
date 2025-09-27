var filmeDuna = {
nomeFilme: 'duna',
anoLacanmento: '2019'
}

var filmes = ['blade runner', 'titanic', 'avatar', filmeDuna,
function(filme) {return "O filme foi lançado em: "+filme.anoLacanmento}]

//var filmes = ['blade runner', 'titanic', 'avatar', filmeDuna,
//(filme) =>"O filme foi lançado em: "+filme.anoLacanmento]

exibeAnoLancamento = filmes[4]

filmes.push('interstellar')
console.log(filmes)

console.log(exibeAnoLancamento(filmeDuna))


