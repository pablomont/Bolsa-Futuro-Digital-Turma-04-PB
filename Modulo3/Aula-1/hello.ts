function greet(name: string): string{
    return `hello, ${name}!`
}

let message: string = greet("world");
console.log(message);