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

function adicionarID(arr) {
    arr.forEach((p, i) => p.id = i + 1);
}

function listarProdutosEmEstoque(arr) {
    console.log('Produtos em estoque:');
    arr.forEach(p => console.log('- ' + p.name));
}


function imprimirProdutoID3(arr) {
    const product = arr.find(p => p.id === 3);
    if (!product) return console.log('Produto com ID 3 não encontrado.');
    console.log('Produto ID 3:');
    console.log('- Nome: ' + product.name);
    console.log('- Preço: ' + product.price);
    console.log('- Quantidade: ' + product.quantity);
    console.log('- Cores: ' + product.colors.join(', '));
}

function produtosBlack(arr) {
    console.log('Produtos com cor preta:');
    arr.forEach(p => {
        if (p.colors.includes('black')) {
            console.log('- ' + p.name);
        }
    });
}

function produtosSemCor(products) {
    console.log('Produtos sem cor:');
    for (let i = 0; i < products.length; i++) {
        if (products[i].colors.length === 0) {
            console.log('- ' + products[i].name);
        }   
    }
}

function newProduct(arr, {name, price, quantity, colors}) {
    const novo = { name, price, quantity, colors };
    arr.push(novo);
}

function excluirForaEstoque(arr) {
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].quantity === 0) {
            products.splice(i, 1);
        }   
    }
}

function imprimirStock(arr) {
    console.log('Estoque atualizado:');
    for (let i = 0; i < arr.length; i++) {
        console.log('- ' + arr[i].name + ': ' + arr[i].quantity);
    }
}

function produtosMaioresQue(arr, priceLimit) {
    console.log('Produtos com preço maior que ' + priceLimit + ':');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > priceLimit) {
            console.log('- ' + arr[i].name);
        }
    }

}

adicionarID(products);
listarProdutosEmEstoque(products);
imprimirProdutoID3(products);
produtosBlack(products);
produtosSemCor(products);
newProduct(products, { name: 'Webcam', price: 80, quantity: 15, colors: ['black'] });
excluirForaEstoque(products);
imprimirStock(products);
produtosMaioresQue(products, 100);