import { recipes } from "./data.ts";


export default function RecipeList() {
  // const greekSalad = recipes.filter(p => p.id === "greek-salad");
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
      
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
