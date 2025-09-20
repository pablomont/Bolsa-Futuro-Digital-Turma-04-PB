let cachorro = {
    raca: "Labrador",
    idade: 10,
    cor: "Preto",
    viuHomem: false,
    late: function(){
        if(this.viuHomem)
        return "late"; 
    else
        return "não late"
    }  
    
}

let resultado = cachorro.late()
console.log(resultado)