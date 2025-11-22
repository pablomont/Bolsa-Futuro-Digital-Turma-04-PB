export default function Carro(){
    const dadosCarro = {
        nome: 'Carro',
        ano: '2045',
        km: '200km',
        preco: 'R$ 1999',
        textoBotao: 'Comprar Carro',
    };

    return (
        <div className="padrao">
            <h2 className="padrao">
                {dadosCarro.nome}: <span className="Amarelo"> {dadosCarro.preco}</span>
            </h2>
            <h3>
                {dadosCarro.nome} modelo <span className="Amarelo">{dadosCarro.ano}</span> e {" "}
                <span className="Amarelo"> {dadosCarro.km}</span> rodados.
            </h3>
            <button>
                {dadosCarro.textoBotao}
            </button>
        </div>
    )
}