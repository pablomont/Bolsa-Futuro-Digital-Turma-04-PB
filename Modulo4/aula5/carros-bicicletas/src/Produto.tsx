function Produto({ nome, km, ano, preco, vendido }: any) {

  let botao;

  if (vendido) {
    botao = (
      <button disabled style={{ background: '#555', cursor: 'not-allowed' }}>
        VENDIDO
      </button>
    );
  } else {
    botao = <button>Comprar {nome}</button>;
  }

  return (
    <div className="produto">
      <h2>
        {nome}: <span className="preco">{preco}</span>
      </h2>

      <p>
        {nome} modelo <span className="texto-amarelo">{ano}</span>, com{" "}
        <span className="texto-amarelo">{km}</span> rodados.
      </p>

      {botao}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Produto 
        nome="Carro" 
        ano="2045" 
        km="200km" 
        preco="R$ 1999" 
        vendido={true}
      />

      <Produto 
        nome="Bicicleta" 
        ano="2050" 
        km="20km" 
        preco="R$ 199" 
        vendido={false}
      />
    </div>
  );
}
