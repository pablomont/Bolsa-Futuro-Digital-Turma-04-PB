let dados = {
    nome:"Mayara",
    sobrenome: "Moura",
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome;
    }
}
console.log(dados.nomeCompleto());
