import React, { useState } from 'react';
import './MakeDrinks.css'
import Ingredient from './Ingredient'

function MakeDrinks() {
    const [selectedIngredients, setSelectedIngredients] = useState({
        'bubbly-quasar': 0,
        'dark-matter-brew': 0,
        'nebula-nectar': 0,
        'plasma-pepper': 0,
      });

    const [mixed, setMixed] = useState(false);

      const handleAddIngredient = (ingredient) => {
        const totalIngredients = Object.values(selectedIngredients).reduce((acc, curr) => acc + curr, 0);
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
        // TODO
        timeout = setTimeout(() => {
            setSelectedIngredients({
                'bubbly-quasar': 0,
                'dark-matter-brew': 0,
                'nebula-nectar': 0,
                'plasma-pepper': 0,
            });
            setMixed(false);
        }, 300);
      }

      const renderAmountDivs = () => {
        const amountDivs = [];

        Object.keys(selectedIngredients).forEach((ingredient) => {

            for (let i = 0; i < selectedIngredients[ingredient]; i++) {
                amountDivs.push(<div key={`${ingredient}-${i}`} className={`single-amount ${ingredient}`}></div>);
            }

        });
        
        while (amountDivs.length < 10) {
            amountDivs.push(<div key={`empty-${amountDivs.length}`} className='single-amount empty-amount'></div>);
        }

        return amountDivs;
    };

  return (
    <div className='make-drink'>
        <div className='ingredient-list'>
            <Ingredient name={"Bubbly Quasar"} ingredient={"bubbly-quasar"} handleAddIngredient={handleAddIngredient} handleRemoveIngredient={handleRemoveIngredient}/>
            <Ingredient name={"Dark Matter Brew"} ingredient={"dark-matter-brew"} handleAddIngredient={handleAddIngredient} handleRemoveIngredient={handleRemoveIngredient}/>
            <Ingredient name={"Nebula Nectar"} ingredient={"nebula-nectar"} handleAddIngredient={handleAddIngredient} handleRemoveIngredient={handleRemoveIngredient}/>
            <Ingredient name={"Plasma Peppers"} ingredient={"plasma-pepper"} handleAddIngredient={handleAddIngredient} handleRemoveIngredient={handleRemoveIngredient}/>
        </div>
        <div className='mixing-area'>
            <div className='amount'>
                <div className='row'>
                    {renderAmountDivs()}
                </div>
            </div>
            <img src="blender.webp" alt="A futuristic blender." />
            <div className='mixing-area-buttons'>
                <button onClick={() => setMixed(true)}>Mix</button>
                <button onClick={handleServe}>Serve</button>
            </div>
        </div>
    </div>
  )
}

export default MakeDrinks
