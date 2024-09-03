import './IngredientsArea.css';
import Ingredient from './Ingredient';

function IngredientsArea({selectedIngredients, setSelectedIngredients}) {

  const handleAddIngredient = (ingredient) => {
    const totalIngredients = Object.values(selectedIngredients).reduce(
      (acc, curr) => acc + curr,
      0
    );
    if (totalIngredients >= 10) return;
    setSelectedIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: prevIngredients[ingredient] + 1,
    }));
  };

  const handleRemoveIngredient = (ingredient) => {
    if (selectedIngredients[ingredient] <= 0) return;
    setSelectedIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: prevIngredients[ingredient] - 1,
    }));
  };

  return (
    <div className="ingredient-area">
        <div className="ingredient-list">
            <Ingredient
            name={'Bubbly Quasar'}
            ingredient={'bubbly-quasar'}
            handleAddIngredient={handleAddIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            />
            <Ingredient
            name={'Dark Matter Brew'}
            ingredient={'dark-matter-brew'}
            handleAddIngredient={handleAddIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            />
            <Ingredient
            name={'Nebula Nectar'}
            ingredient={'nebula-nectar'}
            handleAddIngredient={handleAddIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            />
            <Ingredient
            name={'Plasma Peppers'}
            ingredient={'plasma-peppers'}
            handleAddIngredient={handleAddIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            />
            <div className="machine-logo"></div>
        </div>
    </div>
  );
}

export default IngredientsArea;
