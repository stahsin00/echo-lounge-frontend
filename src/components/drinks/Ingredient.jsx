import './Ingredient.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

function Ingredient(props) {

  return (
    <div className={`ingredient ${props.ingredient}`}>
        <FaMinus className='hover-cursor' onClick={() => props.handleRemoveIngredient(props.ingredient)}/>
        {props.name}
        <FaPlus className='hover-cursor' onClick={() => props.handleAddIngredient(props.ingredient)}/>
    </div>
  )
}

export default Ingredient
