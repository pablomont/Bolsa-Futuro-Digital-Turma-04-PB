import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

function App() {
  //const chemists = people.filter(c => c.profession === 'chemist')
  const listItems = people.map(p => 
  <li key={p.id}>
    <img src={getImageUrl(p)}></img> 
    <p>
      <b>{p.name}:</b>
      {' ' + p.accomplishment + ' '}
      conquistas: {p.accomplishment}
    </p>

  </li>)
  return (
    <>
      <ul>
      {listItems}
      </ul>
    </>
  )
}

export default App
