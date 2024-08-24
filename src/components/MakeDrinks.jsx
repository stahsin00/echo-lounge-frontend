import './MakeDrinks.css'
import Ingredient from './Ingredient'

function MakeDrinks() {

  return (
    <div className='make-drink'>
        <div className='ingredient-list'>
            <Ingredient name={"Bubbly Quasar"}/>
            <Ingredient name={"Dark Matter Brew"}/>
            <Ingredient name={"Nebula Nectar"}/>
            <Ingredient name={"Plasma Peppers"}/>
        </div>
        <div className='mixing-area'>
            <div className='amount'>
                <div className='row'>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                </div>
            </div>
            <div className='mixing-area-buttons'>
                <button>Mix</button>
                <button>Serve</button>
            </div>
        </div>
    </div>
  )
}

export default MakeDrinks
