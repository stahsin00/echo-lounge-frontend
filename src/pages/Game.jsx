import './Game.css'
import Setting from '../components/Setting';
import Dialog from '../components/Dialog';
import Menu from '../components/Menu';
import MakeDrinks from '../components/MakeDrinks';

function Game() {

  return (
    <>
      <div className="game">
        <div className="area">
            <div className="character">
                <div className='logo'>Echo Lounge</div>
            </div>
            <div className='work-area'>
                <Menu />
                <div className="drink">
                    <MakeDrinks />
                </div>
            </div>
        </div>
        <Dialog />
      </div>
    </>
  )
}

export default Game
