function Produto({nome, ano, km, preco, vendido}:any){
    return(
        <div className="ver">
            <h2>
                <span className='TextoBranco'>{nome}:</span>
                <span className="PrecoBotao">{preco}</span>
            </h2>
            <p>
                <span className="Cinza"> {nome} modelo</span>
                <span className="PrecoBotao"> {ano}</span>
                <span className="Cinza">, com</span>
                <span className="PrecoBotao"> {km}</span>
            </p>
                {vendido ? (<button disabled style={{background: "#555", cursor: "not-allowed"}}>Vendido</button>)
                : (<button>Comprar {nome}</button>)}
        </div>
    );
}

export default function ProdutoList(){
    return(
        <div>
            <Produto nome="Carro"
                ano="2045"
                preco="R$1999"
                km="200 km"
                vendido={true}/>
            <Produto nome="Bicicleta"
                ano="2050"
                km="20 km"
                preco="R$199"
                vendido={false}/>
        </div>
    )
};
