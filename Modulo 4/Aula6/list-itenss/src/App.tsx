import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

/* 
const people=[ 'Creola Katherine Johnson: mathematician', 
'Mario José Molina-Pasquel Henríquez: chemist', 
'Mohammad Abdus Salam: physicist', 
'Percy Lavon Julian: chemist', 
'Subrahmanyan Chandrasekhar: astrophysicist', 
] 

const people=[ { id:1, 
name:'Creola Katherine Johnson: mathematician', p
rofession:'mathematician', }, 
{ id:2, 
 name:'Mario José Molina-Pasquel Henríquez',
 profession:'chemist', }, 
 { id:3, n
  ame:'Mohammad Abdus Sala', 
  profession:'physici', }, 
  { id:4, 
   name:'Percy Lavon Julian:', 
   profession:'chemist', 
   }, 
   ] 
   */

function App() {
  const chemists = people.filter((c) => c.profession === "chemist");
  const listItem = people.map((p) => (
    <li key={p.id}>
      <img src={getImageUrl(p)}></img>{" "}
      <p>
        {" "}
        <b>{p.name}:</b>
        {" " + p.profession + " "}
        cosnquistas: {p.accomplishment}{" "}
      </p>{" "}
    </li>
  ));
  return (
    <>
      <ul> {listItem} </ul>
    </>
  );
}

export default App;
