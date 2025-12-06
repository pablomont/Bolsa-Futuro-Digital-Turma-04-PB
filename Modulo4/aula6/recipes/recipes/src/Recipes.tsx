import { recipes } from "./data";

export default function Recipes() {
  return (
    <div>
      <h1>Recipes</h1>

      {recipes.map((recipe) => (
        <div key={recipe.name}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
