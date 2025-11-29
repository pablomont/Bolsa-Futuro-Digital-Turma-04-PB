import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

function App() {

  const nonChemists = people.filter (nc => nc.profession !== 'chemist')
  const chemists = people.filter (c => c.profession === 'chemist')
  const listitems = chemists.map(person => 
  <li key = {person.id}>
  <img src={getImageUrl(person)}/>
  <p>
    <b>{person.name}</b>
    {': ' + person.profession + '. '}
    known for: {person.accomplishment}
  </p>
  </li>)

  const listitems2 = nonChemists.map(person => 
  <li key = {person.id}>
  <img src={getImageUrl(person)}/>
  <p>
    <b>{person.name}</b>
    {': ' + person.profession + '. '}
    known for: {person.accomplishment}
  </p>
  </li>)
  
  return (
    <>
    <h3>
    <b>Scientists</b>
  </h3>
    <p>
    <b>Chemists</b>
  </p>
    <ul>
    {listitems}
    </ul>
     <p>
    <b>Everyone Else</b>
  </p>
    <ul>
      {listitems2}
    </ul>
    </>
  )
}

export default App
