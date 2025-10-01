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

function idsProdutos(arr){
    const produtosComId = [...arr];
    for (let i = 0; i < produtosComId.length; i++) {
    produtosComId[i].id = i + 1;
    }
    return produtosComId
}

products = idsProdutos(products);
console.log("1. Produto com seu ID", products[0]);

function imprimirNomesProdutos(arr){
console.log("2. Nomes dos produtos")
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i].name)
    }
}

imprimirNomesProdutos(products)

function imprimirProdutoPId(arr, idProcurado){
console.log("3. Imprimir o produto pelo seu ID")
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id === idProcurado){
            console.log(arr[i])
            break;
        }
    }
}

imprimirProdutoPId(products, 3)

function imprimirProdutoPCor(arr, corProcurada) {
console.log("4. Imprimir o produto pela cor")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].colors.includes(corProcurada)){
            console.log(arr[i].name)
        }
    }
}
imprimirProdutoPCor(products, 'black')

function imprimirProdutoSCor(arr){
console.log("5. Imprimir produto sem cor")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].colors.length === 0){
            console.log(arr[i].name)
        }
    }
}

imprimirProdutoSCor(products)

const novoProduto = {
    name: 'Caixa de Som', 
    price: 350, 
    quantity: 15, 
    colors: ['black', 'white']
}

function adicionarNovoProduto(arr, produto) {
console.log()
    produto.id = arr.length + 1;
    arr.push(produto);
}