import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist',
// ]

// const people = [
//   {id: 0,
//     name:'Creola Katherine Johnson',
//    profession: 'mathematician'
//   },
//   {id: 1,
//     name:'Mario José Molina-Pasquel Henríquez',
//    profession: 'chemist'
//   },
//   {id: 2,
//     name:'Mohammad Abdus Salam',
//    profession: 'physicist'
//   },
//   {id: 3,
//     name:'Percy Lavon Julian',
//    profession: 'chemist'
//   },
//   {id: 4,
//     name:'Subrahmanyan Chandrasekhar',
//    profession: 'astrophysicist'
//   }
// ];

function App() {
//  const chemists = people.filter(c => c.profession === 'chemist')
 const chemists = people.filter(p => p.profession === "chemist");
 const others = people.filter(p => p.profession !== "chemist");

 const listItems = chemists.map(p => 
    <li key={p.id}>
      <img src={getImageUrl(p)}></img>
      <p>
        <b>{p.name}:</b>
        {' ' + p.profession + ' '}
        conquistas: {p.accomplishment}
      </p>
    </li>)
    
  const otherItems = others.map(p => 
    <li key={p.id}>
      <img src={getImageUrl(p)} alt={p.name} />
      <p>
        <b>{p.name}:</b>
        {' ' + p.profession + ' '}
        conquistas: {p.accomplishment}
      </p>
    </li>
  );

  return (
    <>
    <h1>Scientists</h1>
     <ul>
      {listItems}
     </ul>
     <h1>Everyone Else</h1> 
     <ul>{otherItems}</ul>
    </>
  )
}

export default App
