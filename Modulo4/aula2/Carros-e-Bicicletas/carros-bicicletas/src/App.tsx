
import './App.css'

function App() {
  return(
    <>
      <Carros/>
      <Bicicletas/>
    </>
  )
}

function Carros(){
  return (
    <div className="produto">
      <h2>Carro: <span className="preco">R$ 1999</span></h2>
      <p>Carro modelo 2045, com 200km rodados.</p>
      <button>Comprar Carro</button>
    </div>
  );
}

function Bicicletas(){
  return (
    <div className="produto">
        <h2>Bicicleta: <span className="preco">R$ 199</span></h2>
        <p>Bicicleta modelo 2050, com 20km rodados.
        </p>
        <button>Comprar Bicicleta</button>
    </div>
  );
}


export default App
