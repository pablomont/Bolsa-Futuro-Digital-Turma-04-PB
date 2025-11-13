import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div>
      <h1>Carro e Bicicletas</h1>
      <Carros/>
      <Bicicletas/>
    </div>
  );
}

function Carros() {
  return (
    <div>
      <h2><span className="TextoBranco">Carro: </span><span className="PrecoBotao">R$ 1999</span></h2>
      <p><span className="Cinza"> Carro modelo</span> <span className="PrecoBotao">2045</span>, <span className="Cinza"> com</span><span className="PrecoBotao"> 200km</span> <span className="Cinza">rodados. </span></p>
      <button> Comprar carro</button>
    </div>
  )
}
function Bicicletas() {
  return (
    <div>
      <h2><span className="TextoBranco">Bicicleta: </span><span className="PrecoBotao"> R$ 199</span></h2>
      <p><span className="Cinza">Bicicleta modelo </span><span className="PrecoBotao">2050</span>, <span className="Cinza">com </span><span className="PrecoBotao">20 km</span><span className="Cinza"> rodados.</span></p>
      <button>Comprar bicicleta</button>
    </div>
  );
}
export default App