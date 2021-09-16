import svg from "../../img/icons.svg";

const IngredientsItem = (props) => {
  const ingredient = props.ingredient;
  return (
    <li className="recipe__ingredient">
      <svg className="recipe__icon">
        <use href={`${svg}#icon-check`}></use>
      </svg>
      <div className="recipe__quantity">{ingredient.quantity}</div>
      <div className="recipe__description">
        <span className="recipe__unit">{ingredient.unit}</span>
        {ingredient.description}
      </div>
    </li>
  );
};

export default IngredientsItem;
