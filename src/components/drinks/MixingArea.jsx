import React, { useState } from 'react';
import './MixingArea.css';
import recipes from '../../data/recipes.json';
import { useGame } from '../../context/GameContext';

function MixingArea({ selectedIngredients, clearIngredients }) {
  const { customer, state, serve } = useGame();
  const [mixed, setMixed] = useState(false);

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

    clearIngredients();
    setMixed(false);
  };

  const renderAmountDivs = () => {
    const amountDivs = [];

    Object.keys(selectedIngredients).forEach((ingredient) => {
      for (let i = 0; i < selectedIngredients[ingredient]; i++) {
        amountDivs.push(
          <div
            key={`${ingredient}-${i}`}
            className={`single-ingredient-amount ${ingredient}-background`}
          ></div>
        );
      }
    });

    while (amountDivs.length < 10) {
      amountDivs.push(
        <div
          key={`empty-${amountDivs.length}`}
          className="single-ingredient-amount empty-background"
        ></div>
      );
    }

    return amountDivs;
  };

  return (
    <div className="mixing-area">
        <div className="ingredient-amounts">
            <div className="ingredient-row">{renderAmountDivs()}</div>
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
  );
}

export default MixingArea;
