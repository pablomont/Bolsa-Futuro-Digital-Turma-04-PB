const dadosBicicleta = {
    nome: 'Bicileta',
    ano: '2050',
    km: '20km',
    preco: 'R$ 199',
    textoBotao: 'Comprar Bicicletas'

}

export default function Bicicleta(){
  return (
    <div className="produto">
        <h2>{dadosBicicleta.nome}: <span className="preco">{dadosBicicleta.preco}</span></h2>
        <p>Bicicleta modelo {dadosBicicleta.ano}, com {dadosBicicleta.km} rodados.
        </p>
        <button>{dadosBicicleta.textoBotao}</button>
    </div>
  );
}