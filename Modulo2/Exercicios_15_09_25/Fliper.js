const prompt = require('prompt-sync')()

let P,R = prompt();

if(P === 0 && R === 0){
    console.log('C');
}

else if(P === 1 && R === 0){
    console.log('B');
}

else if(P === 1 && R === 1){
    console.log('A');
}
