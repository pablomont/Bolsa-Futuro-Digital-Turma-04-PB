import "./App.css";
import Produto from "./components/Produto";

export default function App() {
  return (
    <div className="App">
      <Produto
        nome="Carro"
        ano="2045"
        km="200km"
        preco="R$ 1.999"
        vendido={true}
      />

      <Produto
        nome="Bicicleta"
        ano="2050"
        km="20km"
        preco="R$ 199"
        vendido={false}
      />
    </div>
  );
}
