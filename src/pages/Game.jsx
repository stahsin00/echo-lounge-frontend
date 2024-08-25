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
        <div className='logo'>Echo Lounge</div>
        <div className="area">
            <div className="character">
              <img src="Dorothy_Haze.webp" alt="A customer." className='customer'/>
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
