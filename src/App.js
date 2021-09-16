import React, { useState } from "react";

import Header from "./components/UI/Header";
import SearchForm from "./components/Search/SearchForm";
import Navibar from "./components/UI/Navibar";
import SearchResult from "./components/Search/SearchResult";
import Recipe from "./components/Recipe/Recipe";
import { Wrapper, Spinner, Message, Copyright } from "./components/UI/CommonUI";
import Pagination from "./components/UI/Pagination";
import SearchResultItem from "./components/Search/SearchResultItem";
import { RESULT_PER_PAGE, KEY, URL } from "./Constats/Constats";

function App() {
  const [searchResultList, setSearchResultList] = useState({
    recipes: [],
    count: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [curPage, setCurPage] = useState(1);

  const searchResultHandler = async (searchValue) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${URL}recipes?search=${searchValue}&key=${KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setSearchResultList({
        recipes: data.data.recipes,
        count: data.results,
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    setCurPage(1);
  };

  const resultPerPage = (page) => {
    const start = (page - 1) * RESULT_PER_PAGE; // 0
    const end = page * RESULT_PER_PAGE; // 9

    return searchResultList.recipes.slice(start, end);
  };

  const onPageChange = (page) => {
    setCurPage(page);
  };

  let content = null;

  if (searchResultList.count > 0) {
    const recipesList = resultPerPage(curPage).map((recipe) => {
      return <SearchResultItem recipe={recipe} key={recipe.id} />;
    });

    content = <React.Fragment>{recipesList}</React.Fragment>;
  } else if (searchResultList.count === 0) {
    content = (
      <Message
        type="info"
        message={`No recipes found for your query! Please try again ;)`}
      />
    );
  }

  if (error) {
    content = <Message type="error" message={error} />;
  }
  if (isLoading) {
    content = <Spinner />;
  }
  return (
    <Wrapper>
      <div className="container">
        <Header>
          <SearchForm onSearchRecipe={searchResultHandler} />
          <Navibar />
        </Header>
        <SearchResult>
          <ul className="results">{content}</ul>
          <Pagination
            count={searchResultList.recipes.length}
            curPage={curPage}
            onPageChange={onPageChange}
          />
          <Copyright />
        </SearchResult>
        <Recipe></Recipe>
      </div>
    </Wrapper>
  );
}

export default App;
