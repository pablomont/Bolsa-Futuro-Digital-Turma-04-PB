type ProdutoProps = {
  nome: string;
  ano: number;
  km: number;
  preco: number;
  vendido: boolean;
};

function Produto({ nome, ano, km, preco, vendido }: ProdutoProps) {
  return (
    <div className="div">
      <h2>
        {nome}: <span className="texto-amarelo">R$ {preco}</span>
      </h2>

      <p>
        {nome} modelo{" "}
        <span className="texto-amarelo">{ano}</span>, com{" "}
        <span className="texto-amarelo">{km}km</span> rodados.
      </p>

      {vendido ? (
        <button
          disabled
          style={{ background: "#555", cursor: "not-allowed", color: "#ccc" }}
        >
          VENDIDO
        </button>
      ) : (
        <button>Comprar {nome}</button>
      )}
    </div>
  );
}

export default Produto;
