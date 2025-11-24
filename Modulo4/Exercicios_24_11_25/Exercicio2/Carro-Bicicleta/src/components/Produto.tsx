import "../App.css"

export default function Produto({nome, ano, km, preco, vendido}: any){

    let textoBotao = nome

    if(vendido == true){
        textoBotao = <button disabled style={{background: '#555', cursor: 'not-allowed'}}>VENDIDO</button>
    }
    else{
        textoBotao = <button>Comprar {nome}</button>
    }

     return(
        <div className='body'>
            <h2>{nome}: <span className='price'>R$ {preco}</span></h2>
            <p>Carro modelo <span className='year'>{ano}</span>, com <span className='kilometer'>{km}km</span> rodados.</p>
            <button>{textoBotao}</button>
        </div>
    )
}