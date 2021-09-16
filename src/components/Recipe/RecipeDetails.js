import svg from "../../img/icons.svg";

const RecipeDetails = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${svg}#icon-clock`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">
          {recipe.cooking_time}
        </span>
        <span className="recipe__info-text">minutes</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${svg}#icon-users`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--people">
          {recipe.servings}
        </span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons">
          <button className="btn--tiny btn--increase-servings">
            <svg>
              <use href={`${svg}#icon-minus-circle`}></use>
            </svg>
          </button>
          <button className="btn--tiny btn--increase-servings">
            <svg>
              <use href={`${svg}#icon-plus-circle`}></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="recipe__user-generated">
        <svg>
          <use href={`${svg}#icon-user`}></use>
        </svg>
      </div>
      <button className="btn--round">
        <svg className="">
          <use href={`${svg}#icon-bookmark-fill`}></use>
        </svg>
      </button>
    </div>
  );
};

export default RecipeDetails;
