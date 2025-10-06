let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] }, 
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
     { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
    
// adicionar um id para cada produto
console.log("\n1.\n")
products.forEach((product, i) => {
    product.id = i + 1
})
console.log(products)

//imprimir o nome de cada produto
console.log("\n2.\n")
for (let i = 0; i< products.length; i++){
    console.log(products[i].name)
}

//produto com id 3
console.log("\n3.\n")
for (let i=0; i < products.length; i++){
    if (products[i].id === 3){
        console.log(products[i])
    }
}

//imprimir produtos com cor 'black'
console.log("\n4.\n")

for (const product of products){
    if (product.colors.includes('black')){ //o includes é pra verificar algo dentro de uma array
        console.log(product.name)
    }
}

//produtos que nao possuem cor
console.log("\n5.\n")
for (let i = 0; i < products.length; i++){
    if (products[i].colors.length === 0)
        console.log(products[i].name)
}

//adicionar novo produto
console.log("\n6.\n")
products.push({name: 'Celular', price: 3000, quantity: 5, colors: ['white', 'pink']})
console.log(products)

//excluir o que está fora de stock
console.log("\n7.\n")
const productsInStock = products.filter(product => {
    return product.quantity > 0;
});

console.log(productsInStock)

//soma do stock de todos os produtos
console.log("\n8.\n")
let soma = 0;

for (let i=0; i< products.length; i++){
    soma += products[i].quantity;
}


console.log("Soma do stock de todos os produtos: " + soma)

//produtos com preço superior a algum valor (por exemplo, 900)
console.log("\n9.\n")
console.log("Produtos com preço superior a R$ 900:\n")
for (let i = 0; i< products.length; i++){
    if (products[i].price > 900){
        console.log(products[i])
    }
}