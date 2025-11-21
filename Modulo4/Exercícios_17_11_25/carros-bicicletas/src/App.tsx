import './App.css';
import Carros from "./components/Carros";
import Bicicletas  from './components/Bicicletas';

function App() {

  return(

    <>

      <h1 className='titulo-principal'>Carros e Bicicletas</h1>

      <Carros/>
      <Bicicletas/>

    </>

  )
}

export default App