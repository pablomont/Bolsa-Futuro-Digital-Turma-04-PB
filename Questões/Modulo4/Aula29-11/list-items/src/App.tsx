import "./App.css";
import { people } from "./data.ts"
import { getImageUrl } from "./utils";

function App() {
  //itera em uma lista com o .map, recebe o parametro p e retorna o parametro p dentro de uma li
  const chemists = people.filter(p => p.profession === 'chemist')
  const notChemists = people.filter(p => p.profession !== 'chemist')

  const listChemists = chemists.map(p => 
      <li key={p.id}> 
        <img src={getImageUrl(p)}></img>
        <p>
          <b> {p.name} </b>
        </p>
      </li>
  )

  const listNotChemists = notChemists.map(p => 
    <li key={p.id}> 
      <img src={getImageUrl(p)}></img>
      <p>
        <b> {p.name} </b>
      </p>
    </li>
    
  )

  return (
    <>
      <ul>
        <h1>SCIENTISTS</h1>
        <br></br>
        <h3> CHEMISTS</h3>
        {listChemists}
        <br></br>
        <h3> NOT CHEMISTS</h3>
        {listNotChemists}
      </ul>
    </>
  )
}

export default App
