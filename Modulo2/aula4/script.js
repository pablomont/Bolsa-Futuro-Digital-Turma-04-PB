let nomeFilme = "Interestellar"
let diretor = "Nolan"
let duracao = "3 horas"
let sinopse = "sdefrgtytyjytj"

let filme = {
    nomeFilme:"Interestellar",
    diretor: "Nolan",
    sinopse: "aaaaaaa",
    duracao: "3 horas",
    exibeSinopse: function(sin){
        if(sin.length > 10){
            return this.sinopse
        } else{
            return "Menor que 10"
        }
    }
}
let resultado = filme.exibeSinopse("aulioppppysp")
console.log(resultado)

console.log(Math.random())

/*
let outroFilme = new Object()
outroFilme.diretor = "Nolan"
*/
/*
filme.nomeFilme = "Outro Filme"
console.log(filme)
*/
/*
let maisUmFilme = {}
maisUmFilme[nomeFilme] = ""
*/

// let carro {}