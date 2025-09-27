let dados = {
    nome:"Danilo",
    sobrenome: "Gomes",
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome;
    }
}
console.log(dados.nomeCompleto());