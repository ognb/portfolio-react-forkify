import React, { useState, useEffect } from "react";

import { Message, Spinner } from "../UI/CommonUI";
import RecipeFig from "./RecipeFig";
import RecipeDetails from "./RecipeDirections";
import RecipeDirections from "./RecipeDetails";
import RecipeIngredients from "./RecipeIngredients";
import { URL, KEY } from "../../Constats/Constats";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipeHandler = async (recipeId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${URL}recipes/${recipeId}?key=${KEY}`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setRecipe(data.data.recipe);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const controlRecipes = () => {
      const hashId = window.location.hash.slice(1);
      if (hashId.length > 0) {
        searchRecipeHandler(window.location.hash.slice(1));
      }
    };

    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, controlRecipes)
    );

    return () => {
      ["hashchange", "load"].forEach((ev) =>
        window.removeEventListener(ev, controlRecipes)
      );
    };
  });

  let content = (
    <Message
      type={"info"}
      message={"Start by searching for a recipe or an ingredient. Have fun!"}
    />
  );

  if (!isEmpty(recipe)) {
    content = (
      <React.Fragment>
        <RecipeFig recipe={recipe} />
        <RecipeDirections recipe={recipe} />
        <RecipeIngredients recipe={recipe} />
        <RecipeDetails recipe={recipe} />
      </React.Fragment>
    );
  }

  if (error) {
    content = <Message type={"error"} message={error} />;
  }
  if (isLoading) {
    content = <Spinner />;
  }

  return <div className="recipe">{content}</div>;
};

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export default Recipe;
