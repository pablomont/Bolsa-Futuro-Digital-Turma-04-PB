import {
    addID,
    displayNames,
    printByID,
    filterByColor,
    pushProduct,
    removeOutStock,
    totalStock,
    productsAbovePrice
} from './utils.js'


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

export function run() {

    console.log("1. Estado Inicial dos Produtos (com IDs adicionados)");
    products = addID(products);

    console.table(products);

    console.log("\n2. Nomes de todos os produtos:");
    displayNames(products);

    console.log("\n3. Buscando produto com ID = 3:");
    printByID(products, 3);

    console.log("\n4. Produtos que possuem a cor 'preta':");
    filterByColor(products, "black");

    console.log("\n5. Produtos que não possuem cores cadastradas:");
    filterByColor(products);

    console.log("\n6. Adicionando um novo produto à lista...");
    pushProduct(products);
    console.log("Lista completa após a adição:");
    console.table(products);

    console.log("\n7. Apenas produtos em estoque:");
    const produtosEmEstoque = removeOutStock(products);
    console.table(produtosEmEstoque);

    console.log("\n8. Quantidade total de itens em estoque (da lista completa):");
    const totalItens = totalStock(products);
    console.log(` -> Total de itens: ${totalItens}`);

    console.log("\n9. Produtos com preço acima de R$ 150,00:");
    const produtosCaros = productsAbovePrice(products, 150);
    console.table(produtosCaros);
}

