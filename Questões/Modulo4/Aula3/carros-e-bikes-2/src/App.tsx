import Bicicleta from './components/bicicleta'
import Carro from './components/carro'

export default function App() {
  return (
    <>
      <h1> CARROS E BICICLETAS </h1>
      <div className='ficha'>
        <Carro />
        <Bicicleta />
      </div>
    </>
  )
}
