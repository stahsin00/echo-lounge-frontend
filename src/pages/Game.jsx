import './Game.css'
import Setting from '../components/Setting';
import Dialog from '../components/Dialog';
import Menu from '../components/Menu';
import MakeDrinks from '../components/MakeDrinks';
import Recipes from '../components/Recipes';
import { useState } from 'react';

function Game() {
    const [selection, setSelection] = useState("Drinks");

  return (
    <>
      <div className="game">
        <div className="area">
            <div className="character">
                <div className='logo'>Echo Lounge</div>
            </div>
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
