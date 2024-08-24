import './MakeDrinks.css'
import Ingredient from './Ingredient'

function MakeDrinks() {

  return (
    <div className='make-drink'>
        <div className='ingredient-list'>
            <Ingredient name={"Bubbly Quasar"} color={"bubbly-quasar"} />
            <Ingredient name={"Dark Matter Brew"} color={"dark-matter-brew"} />
            <Ingredient name={"Nebula Nectar"} color={"nebula-nectar"} />
            <Ingredient name={"Plasma Peppers"} color={"plasma-pepper"} />
        </div>
        <div className='mixing-area'>
            <div className='amount'>
                <div className='row'>
                    <div className='single-amount bubbly-quasar'></div>
                    <div className='single-amount bubbly-quasar'></div>
                    <div className='single-amount nebula-nectar'></div>
                    <div className='single-amount plasma-pepper'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                    <div className='single-amount'></div>
                </div>
            </div>
            <img src="blender.webp" alt="A futuristic blender." />
            <div className='mixing-area-buttons'>
                <button>Mix</button>
                <button>Serve</button>
            </div>
        </div>
    </div>
  )
}

export default MakeDrinks
