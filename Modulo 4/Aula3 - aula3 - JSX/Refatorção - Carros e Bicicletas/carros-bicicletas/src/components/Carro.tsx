import "../App.css";

export function Carro() {
  const carro = {
    nome: "Carro modelo 2045",
    preco: 1199,
    km: 200,
    link: "estados/pb.html",
  };

  return (
    <div className="destaque">
      <h2>
        <a href={carro.link}>Carro: R${carro.preco}</a>
      </h2>
      <p>
        {carro.nome}, com <span>{carro.km}km</span> rodados.
      </p>
      <div className="destaque2">
        <a href="https://www.netflix.com/br/title/70143836?source=35&fromWatch=true">
          Comprar
        </a>
      </div>
    </div>
  );
}