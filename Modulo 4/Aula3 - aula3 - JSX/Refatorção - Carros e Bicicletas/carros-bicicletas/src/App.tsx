import { Carro } from "./components/Carro.tsx";
import { Bicicleta } from "./components/Bicicleta.tsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Carros e Bicicletas</h1>
      <Carro />
      <Bicicleta />
    </>
  );
}

export default App;