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
  let idCounter = 1; 

function addProductIds (productsArray) {
    productsArray.forEach(function (product) {
  
        product.id = idCounter;

        idCounter++;
    });
}

addProductIds(products);
console.log(products[0]);

function printPoductNames (products) {
  products.forEach (function (product) {
    console.log (product.name)
  });
}

printPoductNames (products)


function findProductById(productsArray, targetId) {

  const foundProduct = productsArray.find(function (product){

    return product.id === targetId 

  });

  return foundProduct;

}

const productWithId3 = findProductById(products, 3)
console.log (productWithId3)


function filterProductsByColor (productsArray, colorName){

  const blackProducts = productsArray.filter(function(product){
    return product.colors.includes (colorName)

  });

  return blackProducts
}

const productsInBlack = filterProductsByColor(products, 'black');
console.log (productsInBlack);


function filterProductsNoColor(productsArray) {
    
    const colorlessProducts = productsArray.filter(function (product) {

      return product.colors. productcolor
    });
 }