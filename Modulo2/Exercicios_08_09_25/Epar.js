function Epar(num){

    if(num % 2 == 0){
         return `${num} é par.`
    }
    else{
        return `${num} não é par.`
    }
}

console.log(Epar(2))
console.log(Epar(1))