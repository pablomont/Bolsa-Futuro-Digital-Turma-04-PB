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

// 1º Adicione  um  id exclusivo para cada produto começando em 1.

console.log('\nQuestão 1:\n')
products.forEach((product, i) => {

    product.id = i + 1;
})

console.log(products);

// 2º Imprima o nome de cada um dos produtos no console.
console.log('\nQuestão 2:\n')
products.forEach(function (i){
    console.log(i.name);
})

// 3º Imprima o produto com id 3 no console.

console.log('Questão 3:\n')
for(let i = 0; i < products.length; i++){
    if(products[i].id === 3){
        console.log(products[i]);
    }
}

// 4º Imprima os produtos em “black” no console. 

console.log('\nQuestão 4:\n')
products.forEach(function(i){
    if(i.colors.includes('black')){
        console.log(i);
    }
})

// 5º  Imprima produtos que não possuem cor no console. 

console.log('\nQuestão 5:\n')
for(let i = 0; i < products.length; i++){
    if(products[i].colors.length === 0)
        console.log(products[i])
}

// 6º Adicione um novo produto ao array com as mesmas propriedades dos produtos existentes.

console.log('\nQuestão 6:\n')

products.push({name: 'Impressora', price: 1220, quantity: 18, colors: ['white', 'black']})
console.log(products)

// 7º Exclua do array os produtos fora de stock.

console.log('\nQuestão 7:\n')
for(let i = 0; i < products.length; i++){
    if(products[i].quantity === 0){
        products.splice(i,1);
    }
}
console.log(products);

// 8º Imprima a soma do stock de todos os produtos do console.

console.log('\nQuestão 8\n')
let sum = 0
for(let i = 0; i < products.length; i++){
    sum += products[i].quantity;
}

console.log(sum)

// 9º Imprima produtos com preço superior a um determinado valor.

console.log('\nQuestão 9\n')
for(let i = 0; i < products.length; i++){
    if(products[i].price > 500){
        console.log(products[i]);
    }
}