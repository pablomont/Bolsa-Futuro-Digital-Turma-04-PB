import "./App.css";

function Carros() {
  return (
    <>
    <h1>Carros e Bicicletas</h1>
      <div className="destaque">
        <h2>
          <a href="estados/pb.html">Carro: R$1199</a>
        </h2>

        <p>
          Carro modelo <span>2045</span>, com <span>200km</span> roados.
        </p>

        <div className="destaque2">
          <a href="https://www.netflix.com/br/title/70143836?source=35&fromWatch=true">
            Comprar
          </a>
        </div>
      </div>

      <div className="destaque">
        <h2>
          <a href="estados/sp.html">Bicicleta R$199</a>
        </h2>

        <p>
          modelo <span>2050</span>, com <span>20km</span> roados.
        </p>

        <div className="destaque2">
          <a href="https://www.netflix.com/br/title/70143836?source=35&fromWatch=true">
            Comprar Carro
          </a>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Carros />
    </>
  );
}

export default App;