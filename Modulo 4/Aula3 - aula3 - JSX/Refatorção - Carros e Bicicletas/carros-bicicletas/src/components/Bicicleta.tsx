import "../App.css";

export function Bicicleta() {
  const bike = {
    nome: "Bicicleta modelo 2050",
    preco: 199,
    km: 20,
    link: "estados/sp.html",
  };

  return (
    <div className="destaque">
      <h2>
        <a href={bike.link}>Bicicleta: R${bike.preco}</a>
      </h2>
      <p>
        {bike.nome}, com <span>{bike.km}km</span> rodados.
      </p>
      <div className="destaque2">
        <a href="https://www.netflix.com/br/title/70143836?source=35&fromWatch=true">
          Comprar
        </a>
      </div>
    </div>
  );
}