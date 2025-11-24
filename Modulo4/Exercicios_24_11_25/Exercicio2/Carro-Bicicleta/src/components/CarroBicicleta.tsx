import Produto from "./Produto";

export default function CarroBicicleta(){
    return(
        <>
            <Produto
            nome = 'Carro'
            preco = '1999'
            ano =  '2045'
            km = '200'
            vendido = {false} 
            />
            <Produto
            nome = 'Bicicleta'
            preco = '199'
            ano =  '2050'
            km = '26'
            vendido = {true} 
            />
        </>
    )
}