import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

function App() {
  const chemists = people.filter(p => p.profession === "chemist");
  const everyoneElse = people.filter(p => p.profession !== "chemist");

  return (
    <>
      <h1>Scientists</h1>

      <h2>Chemists</h2>
      <ul>
        {chemists.map(p => (
          <li key={p.id}>
            <img src={getImageUrl(p)} alt={p.name} />
            <p>
              <b>{p.name}:</b>
              {' ' + p.profession + ' '}
              accomplishment = {p.accomplishment}
            </p>
          </li>
        ))}
      </ul>

      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map(p => (
          <li key={p.id}>
            <img src={getImageUrl(p)} alt={p.name} />
            <p>
              <b>{p.name}:</b>
              {' ' + p.profession + ' '}
              accomplishment = {p.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
