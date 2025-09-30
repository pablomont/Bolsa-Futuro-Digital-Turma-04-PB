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

function adicionaId(produtos){
    for (let i = 0; i < produtos.length; i++) {
        produtos[i].id = i+1;
        console.log(`O produto ${produtos[i].name} recebeu ID:${produtos[i].id}`);
    }
}
function imprimeNome(produtos){
    for(let i=0; i<produtos.length; i++){
        console.log(`Lista de produtos:${produtos[i].name}`)
    }
}
function iD(produtos){
    console.log(`O produto com iD=3 é ${produtos[2].name}`)
}
function corBlack(produtos){
    for(let i=0; i<produtos.length; i++){
        if (produtos[i].colors.includes('black')){
            console.log(`O produto ${produtos[i].name} possue a cor black.`)
        }
    }
}
function semCor(produtos){
    for(let i=0; i<produtos.length; i++){
        if (produtos[i].colors.length===0){
            console.log(`O produto ${produtos[i].name} não possue cor.`)
        }
    }
}
function novoProduto(produto){
    let newProduto = {
        name: "Iphone 16",
        price: 4500,
        quantity: 10,
        colors: ['pink', 'purple', 'yellow']
    };
    
    products.push(newProduto);
    console.log(produto)
}

function filtrarComEstoque(produtos) {
    let produtosComEstoque = [];
    
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].quantity > 0) {
            produtosComEstoque.push(produtos[i]);
             console.log(produtosComEstoque)
        }
    }
   
    return produtosComEstoque
}
function totalEstoque(produtos){
    let totalStok = 0;
    console.log(products)
    for (let i = 0; i < produtos.length; i++) {
        totalStok += produtos[i].quantity; 
    }
    console.log(`O total de produtos no estoque: ${totalStok}`);
}
function produtos1000 (produtos){
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].price>1000){
            console.log(`Os produtos com preço superior a R$1000,00 é ${produtos[i].name}`)
        }
    }
}

adicionaId(products)
imprimeNome(products)
iD(products)
corBlack(products)
semCor(products)
novoProduto(products)
products=filtrarComEstoque(products);
totalEstoque(products)
produtos1000 (products)







