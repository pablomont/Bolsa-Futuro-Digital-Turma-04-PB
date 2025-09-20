let nomeFilme = "Interestellar"
let diretor = "Nolan"
let durancao = "2 horas"
let sinopse = "aaaaaaaaaa"

let filme = {
    nomeFilme: "Interestellar",
    diretor: "Nolan",
    durancao: "3 horas",
    sinopse: "aksgdjpgkjagijgipjígj",
    exibeSinopse: function(sin){
        if(sin.length > 10){
            return sinopse
        } 
        else {
            return "Menor que 10"
        }
    }
}

let resultado = filme.exibeSinopse("stissssssifr")
    console.log(resultado)