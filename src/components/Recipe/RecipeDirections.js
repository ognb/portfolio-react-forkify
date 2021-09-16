import React from "react";
import svg from "../../img/icons.svg";

const RecipeDirections = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe__directions">
      <h2 className="heading--2">How to cook it</h2>
      <p className="recipe__directions-text">
        This recipe was carefully designed and tested by&nbsp;
        <span className="recipe__publisher">{recipe.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a
        className="btn--small recipe__btn"
        href={recipe.source_url}
        rel="noreferrer"
        target="_blank"
      >
        <span>Directions</span>
        <svg className="search__icon">
          <use href={`${svg}#icon-arrow-right`}></use>
        </svg>
      </a>
    </div>
  );
};

export default RecipeDirections;
