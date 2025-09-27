var a = 0;

if (a < 10) {
    console.log("a é menor que 10");
} else {
    console.log("a não é menor que 10");
}

while (a < 10) {
    console.log("WHILE 1 - a é menor que 10");
    a++;
}

let i = 1;
while (i <= 9) {
    console.log("WHILE 2 - i =", i);
    i++;
}

for (let i = 1; i <= 9; i++) {
    console.log("FOR - i =", i);
}

var videoGames = ['ps5','xbox','switch']

console.log(videoGames.length)

videoGames.forEach((item, index) => {
    console.log(item + " " + index);
});