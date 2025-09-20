// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").match(/\S/g);

const [a, b, c] = input
a = parse
//1
if(a){
    //11
    if(b){
        //111
        if(c){
            console.log("*")
        //110    
        } else {
            console.log("C")
        }
    //10    
    } else {
        //101
        if(c){
            console.log("B")
        //100    
        } else {
            console.log("A")
        }
    }
//0    
} else {
   //00 
   if(!b){
        //000
        if(!c){
            console.log("*")
        //001    
        } else {
            console.log("C")
        }
    //01    
    } else {
        //010
        if(!c){
            console.log("B")
        //011    
        } else {
            console.log("A")
        }
    }
}

