import '../App.css'
function Carros(){
    return(
        <div className='body'>
            <h2>Carro: <span className='price'>R$ 1999</span></h2>
            <p>Carro modelo <span className='year'>2045</span>, com <span className='kilometer'>200km</span> rodados.</p>
            <button>Comprar carro</button>
        </div>
    )
}

export default Carros