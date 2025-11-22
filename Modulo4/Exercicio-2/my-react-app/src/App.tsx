import "./App.css";
import Carro from "./carros";
import Bicicleta from "./bicicletas";
function App() {
  return (
    <>
    <Titulo/>
    <Carro/>
    <Bicicleta/>
    </>
  );
}

function Titulo(){
  return (
    <>
      <h1 id="Titulo">Carros e Bicicletas</h1>
    </>
  )
}
export default App;
