import { FaGlassMartiniAlt, FaCog, FaBookOpen, FaSignOutAlt } from 'react-icons/fa';
import './Menu.css'

function Menu(props) {

  return (
    <>
        <div className="menu">
            <button className='main-button' onClick={() => props.setSelection("Drinks")}><FaGlassMartiniAlt className='button-icon' />Make Drink</button>
            <div className='sub-menu'>
                <button onClick={() => props.setSelection("Recipes")}><FaBookOpen className='button-icon' />Recipes</button>
                <button onClick={() => props.setSelection("Settings")}><FaCog className='button-icon' />Settings</button>
                <button id='exit-button'><FaSignOutAlt className='button-icon' />Exit</button>
            </div>
        </div>
    </>
  )
}

export default Menu
