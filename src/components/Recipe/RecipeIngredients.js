import React from "react";
import IngredientsItem from "./IngredientsItem";

const RecipeIngredients = (props) => {
  const { recipe } = props;
  const ingredientsList = recipe.ingredients.map((ingredient, ind) => (
    <IngredientsItem ingredient={ingredient} key={ind} />
  ));

  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">{ingredientsList}</ul>
    </div>
  );
};

export default RecipeIngredients;
