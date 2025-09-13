function isTruthy(value){
    if (value === false){
        return false
    } else if( value === 0){
        return false
    } else if(isNaN(value)){
        return false
    } else if(value === null ){
        return false
    } else if(value === undefined){
        return false
    } else if("") {
        return false
    } else {
        return true
    }
}

console.log(isTruthy(undefined))