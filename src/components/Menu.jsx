import {
  FaGlassMartiniAlt,
  FaCog,
  FaBookOpen,
  FaSignOutAlt,
} from 'react-icons/fa';
import './Menu.css';

function Menu(props) {
  return (
    <>
      <div className="menu">
        <button
          id="make-drinks-button"
          className="primary-button"
          onClick={() => props.setSelection('Drinks')}
        >
          <FaGlassMartiniAlt className="button-icon" />
          Make Drink
        </button>
        <div className="sub-menu">
          <button
            className="secondary-button"
            onClick={() => props.setSelection('Recipes')}
          >
            <FaBookOpen className="button-icon" />
            Recipes
          </button>
          <button
            className="secondary-button"
            onClick={() => props.setSelection('Settings')}
            disabled={true}
          >
            <FaCog className="button-icon" />
            Settings
          </button>
          <button 
            className="secondary-button-special"
            disabled={true}
          >
            <FaSignOutAlt className="button-icon" />
            Exit
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
