function greet (name: string): string{
    return `Hello, ${name.toLowerCase()}!`;
}

const message: string = greet("World");
console.log(message);
