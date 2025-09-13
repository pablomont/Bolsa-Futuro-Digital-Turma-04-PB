function isTruthy(valor){

    if(valor === false){
        console.log ("falsy")
    }
    else if(valor === 0){
        console.log ("falsy")
    }
    else if(isNaN(valor)){
        console.log ("falsy")
    }
    else if(valor === null){
        console.log ("falsy")
    }
    else if(valor === undefined){
        console.log ("falsy")
    }
    else if(valor === ''){
        console.log ("Falsy")
    }
    else{
        console.log ("Truthy")
    }
}

isTruthy(10)