 let carro = {
    modelo: "Tiggor 7x Pro",
    marca: "Caoa Cherry",
    preco: "1000",
    exibepreco: function(preco){
        return this.preco; 
    }  
    
}

console.log(carro.preco);
carro.preco = 3000
console.log(carro.preco)