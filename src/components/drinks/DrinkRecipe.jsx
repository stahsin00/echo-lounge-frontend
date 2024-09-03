import './DrinkRecipe.css';

function DrinkRecipe(props) {
  return (
    <div className="drink-recipe">
      <div className="drink-main">
        <div className="drink-info">
          <div className="drink-heading">
            <h1>{props.name}</h1>
            <div className="drink-flavors">
              {props.flavors.map((flavor) => (
                <span className={`${flavor}-text`}> {flavor} </span>
              ))}
            </div>
          </div>
          <hr></hr>
          <p>{props.description}</p>
        </div>
        <div className="ingredients">
          <div className="bubbly-quasar-background drink-amount">
            {props.ingredients['bubbly-quasar']}
          </div>
          <div className="dark-matter-brew-background drink-amount">
            {props.ingredients['dark-matter-brew']}
          </div>
          <div className="nebula-nectar-background drink-amount">
            {props.ingredients['nebula-nectar']}
          </div>
          <div className="plasma-peppers-background drink-amount">
            {props.ingredients['plasma-peppers']}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkRecipe;
