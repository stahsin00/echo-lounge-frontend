import React, { useState } from 'react';
import './MakeDrinks.css';
import Ingredient from './Ingredient';
import recipes from '../../data/recipes.json';
import { useGame } from '../../context/GameContext';

function MakeDrinks() {
  const { customer, state, serve } = useGame();

  const [selectedIngredients, setSelectedIngredients] = useState({
    'bubbly-quasar': 0,
    'dark-matter-brew': 0,
    'nebula-nectar': 0,
    'plasma-peppers': 0,
  });
  const [mixed, setMixed] = useState(false);

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

  const handleServe = () => {
    const drinks = recipes.drinks.filter((drink) => {
      return Object.keys(selectedIngredients).every(
        (ingredient) =>
          drink.ingredients[ingredient] === selectedIngredients[ingredient]
      );
    });

    const drink =
      drinks.length == 1
        ? drinks[0]
        : {
            name: 'Unknown Drink',
            description:
              'This unknown drink is not from the menu. Will this odd experiment turn out well?',
            ingredients: selectedIngredients,
          };

    if (drinks.length > 1) {
      console.error('Multiple drinks are mapped to the same process.');
      return; // TODO: handle multiple matches case
    }

    drink.mixed = mixed;
    serve(drink);

    setSelectedIngredients({
      'bubbly-quasar': 0,
      'dark-matter-brew': 0,
      'nebula-nectar': 0,
      'plasma-peppers': 0,
    });
    setMixed(false);
  };

  const renderAmountDivs = () => {
    const amountDivs = [];

    Object.keys(selectedIngredients).forEach((ingredient) => {
      for (let i = 0; i < selectedIngredients[ingredient]; i++) {
        amountDivs.push(
          <div
            key={`${ingredient}-${i}`}
            className={`single-amount ${ingredient}-background`}
          ></div>
        );
      }
    });

    while (amountDivs.length < 10) {
      amountDivs.push(
        <div
          key={`empty-${amountDivs.length}`}
          className="single-amount empty-amount"
        ></div>
      );
    }

    return amountDivs;
  };

  return (
    <div className="make-drink">
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
      <div className="mixing-area">
        <div className="amount">
          <div className="row">{renderAmountDivs()}</div>
        </div>
        <img src="blender.webp" alt="A futuristic blender." />
        <div className="mixing-area-buttons">
          <button className="primary-button" onClick={() => setMixed(true)}>
            Mix
          </button>
          <button
            className="primary-button"
            onClick={handleServe}
            disabled={state == 'Waiting' || customer == null}
          >
            Serve
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakeDrinks;
