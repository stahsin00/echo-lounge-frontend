import { useState } from 'react';
import { FaGlassMartiniAlt, FaCog, FaBookOpen, FaSignOutAlt, FaItunesNote, FaVolumeDown, FaCaretLeft, FaCaretRight, FaForward } from 'react-icons/fa';
import './Game.css'

function Game() {
    const [ muteMusic, setMuteMusic ] = useState(false);
    const [ music, setMusic ] = useState(50);

    const [ muteVolume, setMuteVolume ] = useState(false);
    const [ volume, setVolume ] = useState(50);

    const [ speed, setSpeed ] = useState(0);

    const speedOptions = [1, 2, 4]

    const handleMusicChange = (e) => {
        setMuteMusic(false);
        setMusic(e.target.value);
      };
    
    const handleVolumeChange = (e) => {
        setMuteVolume(false);
        setVolume(e.target.value);
      };

    const handleSpeedIncrease = () => {
        setSpeed((speed + 1) % speedOptions.length);
      };
    
    const handleSpeedDecrease = () => {
        setSpeed((speed - 1 + speedOptions.length) % speedOptions.length);
      };

  return (
    <>
      <div className="game">
        <div className="area">
            <div className="character">
                <div className='logo'>Echo Lounge</div>
            </div>
            <div className='work-area'>
                <div className="menu">
                    <button className='main-button'><FaGlassMartiniAlt className='button-icon' />Make Drink</button>
                    <div className='sub-menu'>
                        <button><FaBookOpen className='button-icon' />Recipes</button>
                        <button><FaCog className='button-icon' />Settings</button>
                        <button id='exit-button'><FaSignOutAlt className='button-icon' />Exit</button>
                    </div>
                </div>
                <div className="drink">
                    <div className='setting'>
                        <FaItunesNote className='setting-icon hover-cursor' onClick={() => setMuteMusic(!muteMusic)}/>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={muteMusic? 0 : music}
                            onChange={handleMusicChange}
                            className="slider"
                        />
                        <span>{muteMusic? 0 : music}</span>
                    </div>
                    <div className='setting'>
                        <FaVolumeDown className='setting-icon hover-cursor' onClick={() => setMuteVolume(!muteVolume)} />
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={muteVolume ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="slider"
                        />
                        <span>{muteVolume ? 0 : volume}</span>
                    </div>
                    <div className='setting'>
                        <FaForward className='setting-icon' />
                        <span className='setting-span'>
                            <FaCaretLeft className='hover-cursor' onClick={handleSpeedDecrease}/>
                            {speedOptions[speed]}x
                            <FaCaretRight className='hover-cursor' onClick={handleSpeedIncrease}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='dialog-outer'>
            <div className='scroll-bar'></div>
            <div className="dialog">
                <p><span>Customer :</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <svg 
                    className="triangle hover-cursor" 
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
