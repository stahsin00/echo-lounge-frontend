import './Ingredient.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

function Ingredient(props) {

  return (
    <div className={`ingredient ${props.ingredient}`}>
      <div className='ingredient-screen'>
        {props.name}
        <div className='ingredient-handlers'>
          <FaMinus className='hover-cursor' onClick={() => props.handleRemoveIngredient(props.ingredient)}/>
          <FaPlus className='hover-cursor' onClick={() => props.handleAddIngredient(props.ingredient)}/>
        </div>
      </div>
    </div>
  )
}

export default Ingredient
