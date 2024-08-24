import './Ingredient.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

function Ingredient(props) {

  return (
    <div className='ingredient'>
        <FaMinus className='hover-cursor'/>
        {props.name}
        <FaPlus className='hover-cursor'/>
    </div>
  )
}

export default Ingredient
