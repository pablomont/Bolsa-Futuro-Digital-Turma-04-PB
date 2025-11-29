import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";




function App() {
  const chemists = people.filter(c => c.profession === 'chemist')
  const notchemists = people.filter(c => c.profession !== 'chemist')
  const listItems = chemists.map(p => 

    <li key={p.id}>
      <img src={getImageUrl(p)} />
      <p>
        <b>{p.name}: </b>
        {' ' + p.profession + ' '}
        Consquistas: {p.accomplishment}
      </p>
    </li>)
      const listItems2 = notchemists.map(p => 

    <li key={p.id}>
      <img src={getImageUrl(p)} />
      <p>
        <b>{p.name}: </b>
        {' ' + p.profession + ' '}
        Consquistas: {p.accomplishment}
      </p>
    </li>)
  return (
    <>

      <ul>
        <h1>Chemist</h1>
        {listItems}
        <h2>Everyone Ele</h2>
        {listItems2}
    </ul>
    </>
  )
  
}

export default App
