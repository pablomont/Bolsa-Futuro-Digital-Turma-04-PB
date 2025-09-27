var a = 0
if(a < 10){
    console.log("a é menor que 10")
}else{
    console.log("a é maior ou igual a 10")
}

while(a < 10){
    console.log("a é menor que 10")
    a++
}
//do{
//    console.log("a é menor que 10")
//    a++
//}while(a < 10)

//for(var i = 0; i < 10; i++){
//    console.log("i é menor que 10")
//}

var videoGames = ["Switch", "PS4", "XBOX"]
//for(var i = 0; i < videoGames.length; i++){
//    console.log(videoGames[i])
//}

videoGames.forEach((videoGames, index) => console.log(index + " " + videoGames)) 