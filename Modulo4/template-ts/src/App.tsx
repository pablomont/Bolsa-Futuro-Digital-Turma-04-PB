import "./App.css";


const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
]

function App() {

  const listItems = people.map(person => <li>{person}</li>)
  return (
    <>
      <ul>
        
      </ul>
    </>
  )
}

export default App
