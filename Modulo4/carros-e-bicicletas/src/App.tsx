import "./App.css";

function Carro() {
  return (
    <div className="container">
      <h2>
        Carro:<span> R$ 1999 </span>
      </h2>
      <p>
        Carro modelo<span> 2045</span>, com <span>200km</span> rodados.
      </p>
      <button>Comprar carro</button>
    </div>
  );
}

function Bicicleta() {
  return (
    <div className="container">
      <h2>
        Bicicleta:<span>R$ 199</span>
      </h2>
      <p>
        Bicicleta modelo<span> 2050</span>, com <span>20km</span> rodados.
      </p>
      <button>Comprar bicicleta</button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Carro />
      <Bicicleta />
    </>
  );
}
