import "./App.css"
import { people } from "./data"
import { getImageUrl } from "./utils"

function App() {

  const chemists = people.filter(p => p.profession === 'chemists' );
  const others = people.filter(p => p.profession !== 'chemists')

  const listChemists = chemists.map(p => 
  <li key={p.id}>
  <img src={getImageUrl(p)}></img>
  <p>
    <b>{p.name}:</b>
    {'' + p.profession + ''}
    conquitas: {p.accomplishment}
  </p>
  </li>)

  const listOthers = others.map(p => 
  <li key={p.id}>
  <img src={getImageUrl(p)}></img>
  <p>
    <b>{p.name}:</b>
    {'' + p.profession + ''}
    conquitas: {p.accomplishment}
  </p>
  </li>)

 return (
  <>
    <h2>Chemists</h2>
    <ul>
      {listChemists}
    </ul>

    <h2>Others</h2>
    <ul>
        {listOthers}
    </ul>
  </>
);
}

export default App
