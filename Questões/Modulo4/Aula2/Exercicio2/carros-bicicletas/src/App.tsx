import './App.css'

export default function App() {
  return (
    <>
    <h1> Carros e Bicicletas </h1>
    <Carros/>
    <Bicicletas/>
    </>
  )
}

function Carros(){
  return (
      <div className='padrao'> 
        <h2> Carro: <span className="Amarelo">R$ 1999</span></h2>
        <h3>Carro modelo <span className="Amarelo">2045</span> com <span className="Amarelo">200km</span> rodados.</h3>
        <button>Comprar Carro</button>
   </div>
  )
}

function Bicicletas(){
  return (
      <div className='padrao'>
        <h2 >Bicicleta: <span className="Amarelo">R$ 199</span></h2>
        <h3>Bicicleta modelo <span className="Amarelo">2050</span>, com <span className="Amarelo">20km</span> rodados</h3>
        <button>Comprar Bicicleta</button>
      </div>
    )
}

