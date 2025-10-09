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

function addId(arr){
    id = 1;
    for(let i = 0; i < arr.length; i++){
        arr[i].id = id + i;
    }
    return arr;
}

function printName(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].name);
    }
}

function printId(arr, id){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id == id){
            console.log(arr[i].name);
        }
    }
}

function printColor(arr, color){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].colors.includes(color)){
            console.log(arr[i].name);
        }
    }
}

function printNotColor(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].colors == ''){
            console.log(arr[i].name);
        }
    }
}

function addProduct(arr, name, price, quantity, colors){
    let id = arr.length + 1;
    arr.push({id: id, name: name, price: price, quantity: quantity, colors: colors});
    return arr;
}

function RemoveStock(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].quantity <= 0){
            arr.splice(i, 1);
        }
    }
    return arr;
}

function sumStock(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].quantity;
    }
    console.log(`O estoque total é de ${sum} produtos.`); 
}

function checkPrice(arr, price){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price > price){
            console.log(arr[i].name);
        }
    }
}
