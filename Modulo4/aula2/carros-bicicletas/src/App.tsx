import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carro from './components/Carro'
import Bicicleta from './components/Bicicleta'

function App() {
  return (
    <div>
      <h1 className='titulo_centralizado'>Carros e Bicicletas</h1>
      <Carro/>
      <Bicicleta/>
    </div>
  );
}

export default App