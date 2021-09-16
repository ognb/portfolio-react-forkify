import React from "react";
import svg from "../../img/icons.svg";

const SearchResultItem = (props) => {
  const { recipe } = props;

  const prevLinkClickHandler = (event) => {
    // event.preventDefault();
    // console.log(event.target);
  };

  return (
    <li className="preview">
      <a
        className="preview__link"
        href={`#${recipe.id}`}
        onClick={prevLinkClickHandler}
      >
        <figure className="preview__fig">
          <img src={recipe.image_url} alt={recipe.title} />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{recipe.title}</h4>
          <p className="preview__publisher">{recipe.publisher}</p>
          <div className="preview__user-generated ">
            <svg>
              <use href={`${svg}#icon-user`}></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SearchResultItem;
