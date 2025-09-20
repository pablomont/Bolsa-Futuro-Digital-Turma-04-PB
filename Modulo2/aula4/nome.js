let dados = {
    nome: "Danilo",
    sobrenome: "Gomes",
    exibeNome: function(nome, sobrenome){
        return this.nome + " " + this.sobrenome; 
    }  
    
}

console.log(dados.exibeNome());
