import { recipes } from "./data.ts";

export default function RecipeList() {

  const listRecipes = recipes.map(r => {
    return (
      <p key={r.id}>
        <h2>{r.name}</h2>
        <ul>{r.ingredients.map(ing => (<li key={ing}> {ing} </li>
          ))}
        </ul>
      </p>
    )
  });

  return (
    <div>
      <b><h1>Recipes</h1></b>
      {listRecipes}
    </div>
  );
}
