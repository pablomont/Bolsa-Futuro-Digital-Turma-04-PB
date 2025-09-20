var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    descricao: function() {
        return this.marca + " " + this.portas + " portas - R$ " + this.preco;
    }
};

carro.preco = 3000;
console.log(carro.descricao());
