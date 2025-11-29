import { recipes } from "./data.ts";

const receitas = recipes.map( r => 
<>
<p>
    <b>{r.name}</b>
  </p>
<li key = {r.id}>
  <p>
    <li>
      {r.ingredients}
    </li>
  </p>
</li>)
</>

export default function RecipeList() {
  return (
    <div>
      <h1>
        <b>Recipes</b>
      </h1>
      <h2>
        <ul>
          {receitas}
        </ul>
      </h2>
    </div>
  );
}
