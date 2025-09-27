var filmeCasteloAnimado = {
    nomeFilme: 'O Castelo Animado',
    anoLancamento: '2004'
}

var filmes = ['titanic', 'o castelo animado',
    (filme) => 'o filme foi lançado em: '+filme.anoLancamento]

let exibeAnoLancamento = filmes[2]

console.log(filmes.push('interestelar'))

console.log(exibeAnoLancamento(filmeCasteloAnimado))