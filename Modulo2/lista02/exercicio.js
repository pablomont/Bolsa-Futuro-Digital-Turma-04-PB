var Pedido={
    productName: "Iphone",
    price: 4500,
    frete: function(){
        if(this.price>=1 && this.price<=2000){
            return 300
        }else if(this.price>=2001 && this.price<=4000){
            return 500;
        } else if (this.price>4000){
            return 700;
        }else{
            process.exit()
        }
}}

function calculatePrice(Pedido){
    let precoFinal=Pedido.price+Pedido.frete();
    console.log(precoFinal)
}

calculatePrice(Pedido)