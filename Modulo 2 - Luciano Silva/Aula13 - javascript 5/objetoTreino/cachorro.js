let cachorro ={
 raca: "labrador" ,
 cor: "preto" ,
 idade: 10 ,
 viuHomen: false,
 late: function(){
    if(this.viuHomen)
        return "late"
    else
        return "não late"
    }
}

let resultado = cachorro.late()
console.log(resultado)
// console.log(cachorro.late)//