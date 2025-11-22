export default function Bicicleta(){
    const dadosBike = {
        nome: 'Bicicleta',
        ano: '2050',
        km: '20km',
        preco: 'R$ 199',
        textoBotao: 'Comprar Bicicleta',
    };

    return (
        <div className="padrao">
            <h2 className="padrao">
                {dadosBike.nome}: <span className="Amarelo"> {dadosBike.preco}</span>
            </h2>
            <h3>
                {dadosBike.nome} modelo <span className="Amarelo">{dadosBike.ano}</span> e {" "}
                <span className="Amarelo"> {dadosBike.km}</span> rodados.
            </h3>
            <button>
                {dadosBike.textoBotao}
            </button>
        </div>
    )
}