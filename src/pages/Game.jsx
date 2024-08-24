import { useState } from 'react'
import './Game.css'

function Game() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="game">
        <div className="area">
            <div className="character">
                <div className='logo'>Echo Lounge</div>
            </div>
            <div className='work-area'>
                <div className="menu">
                    Menu
                </div>
                <div className="drink">
                    Drink
                </div>
            </div>
        </div>
        <div className='dialog-outer'>
            <div className='scroll-bar'></div>
            <div className="dialog">
                <p><span>Customer :</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <svg 
                    className="triangle" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100"
                >
                    <polygon points="50,90 90,10 10,10" fill="white" />
                </svg>
            </div>
        </div>
      </div>
    </>
  )
}

export default Game
