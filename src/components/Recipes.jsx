import './Recipes.css';
import recipes from '../data/recipes.json';
import DrinkRecipe from './drinks/DrinkRecipe';

function MakeDrinks() {
    console.log(recipes.drinks);

  return (
    <div className='recipes'>
        {
            recipes.drinks.map((recipe, index) => (
                <DrinkRecipe
                  key={index}
                  name={recipe.name}
                  description={recipe.description}
                  ingredients={recipe.ingredients}
                  flavors={recipe.flavors}
                />
            ))
        }
    </div>
  )
}

export default MakeDrinks
