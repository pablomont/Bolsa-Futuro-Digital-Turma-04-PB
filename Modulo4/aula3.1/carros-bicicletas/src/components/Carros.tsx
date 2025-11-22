function Carros() {

  const dadosCarro = {
    nome: 'Carro',
    ano: '2045',
    km: '200km',
    preco: 'R$ 1999',
    textoBotao: 'Comprar Carro'
  };

  return (
    <div className="div">
      <h2>
        {dadosCarro.nome}: <span className="texto-amarelo">{dadosCarro.preco}</span>
      </h2>

      <p>
        {dadosCarro.nome} modelo <span className="texto-amarelo">{dadosCarro.ano}</span>, com  
        <span className="texto-amarelo"> {dadosCarro.km}</span> rodados.
      </p>

      <button>{dadosCarro.textoBotao}</button>
    </div>
  );
}

export default Carros;
