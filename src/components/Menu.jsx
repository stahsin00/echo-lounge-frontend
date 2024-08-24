import { FaGlassMartiniAlt, FaCog, FaBookOpen, FaSignOutAlt } from 'react-icons/fa';
import './Menu.css'

function Menu() {

  return (
    <>
        <div className="menu">
            <button className='main-button'><FaGlassMartiniAlt className='button-icon' />Make Drink</button>
            <div className='sub-menu'>
                <button><FaBookOpen className='button-icon' />Recipes</button>
                <button><FaCog className='button-icon' />Settings</button>
                <button id='exit-button'><FaSignOutAlt className='button-icon' />Exit</button>
            </div>
        </div>
    </>
  )
}

export default Menu
