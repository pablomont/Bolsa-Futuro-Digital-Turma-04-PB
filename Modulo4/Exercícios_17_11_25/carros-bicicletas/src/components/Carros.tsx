import '../App.css'

const dadosCarro = {
    nome: 'Carro',
    preco: 1999,
    ano: 2045,
    km: 200,
    botao: 'Comprar Carro'
}

function Carros(){
    return(
        <div className='body'>
            <h2>{dadosCarro.nome}: <span className='price'>R$ {dadosCarro.preco}</span></h2>
            <p>Carro modelo <span className='year'>{dadosCarro.ano}</span>, com <span className='kilometer'>{dadosCarro.km}km</span> rodados.</p>
            <button>{dadosCarro.botao}</button>
        </div>
    )
}

export default Carros