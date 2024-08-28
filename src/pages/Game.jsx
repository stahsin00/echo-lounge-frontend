import './Game.css'
import Setting from '../components/Setting';
import Dialog from '../components/dialog/Dialog';
import Menu from '../components/Menu';
import MakeDrinks from '../components/drinks/MakeDrinks';
import Recipes from '../components/drinks/Recipes';
import Customer from '../components/Customer';
import { useState } from 'react';

function Game() {
    const [selection, setSelection] = useState("Drinks");

  return (
    <>
      <div className="game">
        <div className='logo'>Echo Lounge</div>
        <div className="area">
            <Customer />
            <div className='work-area'>
                <Menu setSelection={setSelection}/>
                <div className="drink">
                    {
                        (selection === "Drinks") ? <MakeDrinks /> : ((selection === "Settings") ? <Setting /> : <Recipes />)
                    }
                </div>
            </div>
        </div>
        <Dialog />
      </div>
    </>
  )
}

export default Game
