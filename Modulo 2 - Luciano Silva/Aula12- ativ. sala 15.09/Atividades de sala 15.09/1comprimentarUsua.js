// FUNCIONOU
function greetUser(language) {
    // Convertendo para minúsculas para facilitar a comparação
    const lang = language.toLowerCase();
    // Objeto com saudações
    const greetings = {
        english: "Hello",
        spanish: "Hola",
        french: "Bonjour",  
        italian: "Ciao",
        german: "Hallo",
        portuguese: "Olá"
    };
    // Retorna a saudação ou "Hello" se não estiver no objeto
    return greetings[lang] || "Hello";
}

// Exemplo de uso:
console.log(greetUser("English"));   // "Hello"
console.log(greetUser("SPANISH"));   // "Hola"