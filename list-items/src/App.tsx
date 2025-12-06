import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

  

function App() {
  const chemists = people.filter(c => c.profession === 'chemist')
  const others = people.filter(c => c.profession !== 'chemist')
  
  const listothers = (list:any) =>
   list.map((p: any) =>
    <li key={p.id}>
      <img src={getImageUrl(p)}></img>
      <p>
        <b>{p.name}:</b>
       {'' + p.chemist + ''}
       conquistas: {p.accomplishment}
       </p>
       </li>)


  return (
    <>
      <ul>
     {listothers(chemists)}
      </ul>
       <ul>
     {listothers(others)}
      </ul>
    </>
  )
}

export default App
