function Bicicletas() {

  const dadosBicicleta = {
    nome: 'Bicicleta',
    ano: '2050',
    km: '20km',
    preco: 'R$ 199',
    textoBotao: 'Comprar Bicicleta'
  };

  return (
    <div className="div">
      <h2>
        {dadosBicicleta.nome}: <span className="texto-amarelo">{dadosBicicleta.preco}</span>
      </h2>

      <p>
        {dadosBicicleta.nome} modelo <span className="texto-amarelo">{dadosBicicleta.ano}</span>, com  
        <span className="texto-amarelo"> {dadosBicicleta.km}</span> rodados.
      </p>

      <button>{dadosBicicleta.textoBotao}</button>
    </div>
  );
}

export default Bicicletas;
