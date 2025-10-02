export function addID(products) {
    return products.map((product, index) => ({id: index + 1, ...product}))
}

export function displayNames(products) {
    products.forEach(product => console.log(product.name))
}

export function printByID(products, ID) {
    const product = products.find((product) => product.id === ID)
    console.log(product)
}

export function filterByColor(products, color = null) {
    const colorsArray = color
        ? products.filter(product => product.colors.includes(color))
        : products.filter(product => product.colors.length === 0)
    displayNames(colorsArray)
}

export function pushProduct(products) {
    const nextID = products.length + 1;
    const newProduct = {id: nextID, name: 'New Product', price: 99, quantity: 15, colors: ['blue']};
    products.push(newProduct);
}

export function removeOutStock(products) {
    return products.filter(product => product.quantity > 0)
}

export function totalStock(products) {
    return products.reduce((sum, product) => sum + product.quantity, 0)
}

export function productsAbovePrice(products, price) {
    return products.filter(product => product.price > price)
}