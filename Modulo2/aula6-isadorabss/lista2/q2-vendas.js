let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['sliver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['sliver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'sliver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
function addId(produto) {
    for (let i = 0; i < produto.length; i++) {
        produto[i].id = i + 1;
    }
}

function imprimir(produto) {
    for (let i = 0; i < produto.length; i++) {
        console.log(produto[i].name);
    }
}

function imprimirId(produto, id) {
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].id === id) {
            console.log(produto[i].name);
            return;
        }
    }
    console.log("Produto não encontrado");
}

function imprimirCor(produto, cor) {
    let produtosEncontrados = [];
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].colors.includes(cor)) {
            produtosEncontrados.push(produto[i].name);
        }
    }
    if (produtosEncontrados.length > 0) {
        console.log(produtosEncontrados);
    } else {
        return "Produto não encontrado";
    }
}

function imprimirSemCor(produto) {
    let produtosEncontrados = [];
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].colors.length === 0) {
            produtosEncontrados.push(produto[i].name);
        }
    }
    if (produtosEncontrados.length > 0) {
        console.log(produtosEncontrados);
    } else {
        return "Produto não encontrado";
    }
}

function addItem(produto, nome, preco, quantidade, cores) {
    let id = produto.length + 1;
    let novoProduto = {
        name: nome,
        price: preco,
        quantity: quantidade,
        colors: cores,
        id: id,
    };
    produto.push(novoProduto);
}

function excluir(produto) {
    for (let i = produto.length - 1; i >= 0; i--) {
        if (produto[i].quantity === 0) {
            produto.splice(i, 1);
        }
    }
}

function somaEstoque(produto) {
    let soma = 0;
    for (let i = produto.length - 1; i >= 0; i--) {
        soma += (produto[i].quantity);
    }
    console.log(soma);
}

function precoAcima(produto, preco){
    for (let i = produto.length - 1; i >= 0; i--) {
        if (produto[i].price > preco) {
            console.log(produto[i].name);
        }
    }
}

addId(products);
imprimir(products);
imprimirId(products, 3);
imprimirCor(products, 'black');
imprimirSemCor(products);
addItem(products, 'Cadeira', 15, 30, ['white', 'black', 'pink']);
excluir(products);
somaEstoque(products);
precoAcima(products, 50);
console.log(products);