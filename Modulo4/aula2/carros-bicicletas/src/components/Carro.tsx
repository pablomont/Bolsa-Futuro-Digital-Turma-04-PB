const dadosCarro = {
    nome: 'Carro',
    ano: '2045',
    km: '200km', 
    preco: 'R$ 1999',
    textoBotao: 'Comprar Carro'
}; 

function Carro(){
    return(
        <div className="ver">
            <h2>
                <span className="TextoBranco">{dadosCarro.nome}:</span>
                <span className="PrecoBotao">{dadosCarro.preco}</span>
            </h2>
            <p>
                <span className="Cinza">{dadosCarro.nome} modelo</span>
                <span className="PrecoBotao">{dadosCarro.ano}</span>
                <span className="Cinza">, com</span>
                <span className="PrecoBotao"> {dadosCarro.km}</span>
            </p>
            <button>{dadosCarro.textoBotao}</button>
        </div>
    );
}
export default Carro;