type ProdutoProps = {
  nome: string;
  ano: string;
  km: string;
  preco: string;
  vendido: boolean;
};

export default function Produto({
  nome,
  ano,
  km,
  preco,
  vendido,
}: ProdutoProps) {
  return (
    <div className="produto">
      <h2>
        {nome}:{" "}
        <span className="texto-amarelo">{preco}</span>
      </h2>

      <p>
        {nome} modelo{" "}
        <span className="texto-amarelo">{ano}</span>, com{" "}
        <span className="texto-amarelo">{km}</span> rodados.
      </p>

      {vendido ? (
        <button disabled style={{ background: "#555", cursor: "not-allowed" }}>
          VENDIDO
        </button>
      ) : (
        <button>Comprar {nome}</button>
      )}
    </div>
  );
}
