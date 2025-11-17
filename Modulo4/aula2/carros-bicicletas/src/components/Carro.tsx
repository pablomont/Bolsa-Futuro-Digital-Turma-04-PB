const dadosCarro = {
    nome: 'Carro',
    ano: '2045',
    km: '200km',
    preco: 'R$ 1999',
    textoBotao: 'Comprar Carro'

}

export default function Carro(){
  return (
    <div className="produto">
      <h2>{dadosCarro.nome}: <span className="preco">{dadosCarro.preco}</span></h2>
      <p>Carro modelo {dadosCarro.ano}, com {dadosCarro.km} rodados.</p>
      <button>{dadosCarro.textoBotao}</button>
    </div>
  );
}
