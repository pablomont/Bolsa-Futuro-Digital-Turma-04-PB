import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";

function App() {
  const chemists = people.filter(p => p.profession === "chemist");
  const others = people.filter(p => p.profession !== "chemist");

  const renderList = (list) =>
    list.map((p) => (
      <li key={p.id}>
        <img src={getImageUrl(p)} />
        <p>
          <b>{p.name}:</b>
          {" " + p.profession + " "}
          conquistas: {p.accomplishment}
        </p>
      </li>
    ));

  return (
    <>
      <h2>Químicos</h2>
      <ul>{renderList(chemists)}</ul>

      <h2>Todos os outros</h2>
      <ul>{renderList(others)}</ul>
    </>
  );
}

export default App;
