import { recipes } from "./data.ts";

export default function RecipeList() {
  const greekSalad = recipes.filter(c => c.name === 'Greek Salad')
  const listItems = recipes.map(p => 
    <>
      <b><h1>{p.name}</h1> </b>
      <ul>
        {p.ingredients.map(ing => <li><b>{ing}</b></li>)}
    </ul>
  </>

  )

  return (
    <div>
      <h1>Recipes</h1>
      {listItems}

    </div>
  );
}
