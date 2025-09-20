var pessoa = {
    nome: "João",
    sobrenome: "Pereira",

    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome;
    }
};
console.log(pessoa.nomeCompleto());