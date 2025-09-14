function Truthy(valor){
    if(valor === false || valor === null || valor === undefined || valor === 0 || valor === "" || valor === NaN){
        return false
    } else {
        return true
    }
}

console.log("O resultado para 0 eh:", Truthy(0)) 
console.log("O resultado para 'Raul' eh:", Truthy("Raul"))