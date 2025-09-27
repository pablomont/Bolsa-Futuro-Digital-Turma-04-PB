
var filmeDuna = {
    nomeFilme: 'Duna',
    anoLancamento: '2019'
}

var filmes = ['blade runner', 'titanic', 'avatar',filmeDuna,
    function(filmes) {console.log("O filme foi lançado em: "+filmes.anoLancamento)}]

let exibeAnoLancamento = filmes[4]

console.log(exibeAnoLancamento(filmeDuna))
