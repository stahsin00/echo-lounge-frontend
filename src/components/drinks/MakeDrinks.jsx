import React, { useState } from 'react';
import './MakeDrinks.css';
import MixingArea from './MixingArea';
import IngredientsArea from './IngredientsArea';

function MakeDrinks() {
  const [selectedIngredients, setSelectedIngredients] = useState({
    'bubbly-quasar': 0,
    'dark-matter-brew': 0,
    'nebula-nectar': 0,
    'plasma-peppers': 0,
  });

  const clearIngredients = () => {
    setSelectedIngredients({
      'bubbly-quasar': 0,
      'dark-matter-brew': 0,
      'nebula-nectar': 0,
      'plasma-peppers': 0,
    });
  }

  return (
    <div className="make-drinks">
      <IngredientsArea selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients}/>
      <MixingArea selectedIngredients={selectedIngredients} clearIngredients={clearIngredients}/>
    </div>
  );
}

export default MakeDrinks;
