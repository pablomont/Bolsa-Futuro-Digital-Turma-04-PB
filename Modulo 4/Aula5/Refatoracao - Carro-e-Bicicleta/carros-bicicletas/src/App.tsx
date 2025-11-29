import "./App.css";

export function Produto({ nome, ano, km, preco, vendido }) {
  return (
    <div className="destaque">
      <h2>{nome}:<span className="texto-amarelo"> R${preco} </span></h2>

      <p>
        {nome} do ano 
        <span className="texto-amarelo"> {ano} </span>
        com 
        <span className="texto-amarelo"> {km}km </span>
        rodados.
      </p>

      <div className="destaque2">
        {vendido ? (
          <button disabled style={{ background: "#555", cursor: "not-allowed" }}>
            VENDIDO
          </button>
        ) : (
          <button>
            Comprar {nome}
          </button>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Carros e Bicicletas</h1>

      <Produto
        nome="Carro"
        ano={2045}
        km={200}
        preco={1199}
        vendido={false}
      />

      <Produto
        nome="Bicicleta"
        ano={2050}
        km={20}
        preco={199}
        vendido={true}
      />
    </>
  );
}

export default App;