function calculatePrice(object){

    let frete;
    let precoFinal;

    if(isNaN(object.price) || object.price < 0){
        return 'Valor inválido.';
        //process.exit(); 
    }

    if(object.price >= 1 && object.price <= 2000){

        frete = 300;
        precoFinal = object.price + frete;

        return `O produto ${object.productName} custa ${object.price}. Seu custo de envio é ${frete}. Portanto, o preço final é de ${precoFinal}`

    }

    else if(object.price > 2000 && object.price <= 4000){

        frete = 500;
        precoFinal = object.price + frete;

        return `O produto ${object.productName} custa ${object.price}. Seu custo de envio é ${frete}. Portanto, o preço final é de ${precoFinal}`

    }

    else if(object.price > 4000){

        frete = 700;
        precoFinal = object.price + frete;

        return `O produto ${object.productName} custa ${object.price}. Seu custo de envio é ${frete}. Portanto, o preço final é de ${precoFinal}`

    }


}

const order1 = {

    productName: 'Galaxy Book 4 Ultra',
    price: -23,
}
const order2 = {

    productName: 'Galaxy Tab S11 Ultra',
    price: 4500,
}

const order3 = {

    productName: 'Galaxy s24',
    price: 3900,
}



console.log(calculatePrice(order1))
console.log(calculatePrice(order2))
console.log(calculatePrice(order3))