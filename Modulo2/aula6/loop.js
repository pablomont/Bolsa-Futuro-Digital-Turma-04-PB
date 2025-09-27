/*var a = 0
if(a < 10) {
    console.log("a é menor que 10")
}else{
    console.log("a não é menor que 10")
} */
/*
while(a < 10){
    console.log("a é menor que 10")
    a++; // sem essa linha teremos um loop infinito
} */
// a = a + 1
/*
do{
console.log("a é menor que 10")
} while(a < 10)
*/
/*
let i = 1;
while(i <= 9){
    i++
}

for(let i =1; i <= 9; i++){
    console.log.log(i)
}
    */
var videoGames = ['ps5', 'xbox','switch']

//console.log(videoGames[0])
//console.log(videoGames[1])
//console.log(videoGames[2])

console.log(videoGames.length)

///for(let i =0; i < videoGames.length; i++){
 ///   console.log(videoGames[i])
///}

videoGames.forEach(function(i){console.log(i)})

videoGames.forEach(i => console.log(i))

videoGames.forEach((i,p) => console.log(i + " "+p))

videoGames.forEach((videoGame, index) => console.log(videoGames + " "+index))