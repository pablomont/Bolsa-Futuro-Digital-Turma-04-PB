const dadosBicicleta ={
    nome: 'Bicicleta', 
    ano: '2050',
    km: '20 km', 
    preco: 'R$ 199', 
    textoBotao: 'Comprar Bicicleta'
}; 

function Bicicleta() {
  return (
    <div className="ver">
      <h2>
        <span className="TextoBranco">{dadosBicicleta.nome}: </span>
        <span className="PrecoBotao">{dadosBicicleta.preco}</span>
      </h2>
      <p>
        <span className="Cinza">{dadosBicicleta.nome} modelo </span>
        <span className="PrecoBotao">{dadosBicicleta.ano}</span>
        <span className="Cinza">, com </span>
        <span className="PrecoBotao">{dadosBicicleta.km}</span>
        <span className="Cinza"> rodados.</span>
      </p>
      <button>{dadosBicicleta.textoBotao}</button>
    </div>
  );
}

export default Bicicleta;