import "./App.css";
import Produto from "./components/Produto";

function App() {
  return (
    <>
      <h1>Carros e Bicicletas</h1>

      {/* Lembrete: Carro já foi vendido */}
      <Produto 
        nome="Carro"
        ano={2045}
        km={200}
        preco={1999}
        vendido={true}
      />

      {/* Lembrete: Bicicleta está disponível */}
      <Produto 
        nome="Bicicleta"
        ano={2050}
        km={20}
        preco={199}
        vendido={false}
      />
    </>
  );
}

export default App;
