import '../App.css'

const dadosBicicleta = {
    nome: 'Bicicleta',
    preco: 199,
    ano: 2050,
    km: 26,
    botao: 'Comprar Bicicleta'
}

function Bicicletas(){
    return(
        <div className='body'>
            <h2>{dadosBicicleta.nome}: <span className='price'>R$ {dadosBicicleta.preco}</span></h2>
            <p>Bicicleta modelo <span className='year'>{dadosBicicleta.ano}</span>, com <span className='kilometer'>{dadosBicicleta.km}km</span> rodados.</p>
            <button>{dadosBicicleta.botao}</button>
        </div>
    )
}

export default Bicicletas