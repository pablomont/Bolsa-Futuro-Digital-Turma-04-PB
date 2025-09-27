// let filmes = [filmeDuna, 'blade runner', 'titanic', 'avatar', funtion(filme)]
var filmeDuna = {
    nomeFilme: 'duna',
    anoLancamento: '2019'
}


// var filmes = ['blade runner', 'titanic', 'avatar', filmeDuna, 
   // function(filme) {return "O filme foi lançado em: "+filme.anoLancamento}]

   var filmes = ['blade runner', 'titanic', 'avatar', filmeDuna, 
   () => "O filme foi lançado em: "+filme.anoLancamento]

let exibeAnoLancamento = filmes [4]

console.log (filmes.push('interestellar'))
console.log(filmes)

console.log(exibeAnoLancamento(filmeDuna))