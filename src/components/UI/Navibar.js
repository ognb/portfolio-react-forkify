import React, { useState } from "react";

import Modal from "./Modal";
import svg from "../../img/icons.svg";

const Navibar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NaviItemAddRecipe />
        <NaviItemBookmarks />
      </ul>
    </nav>
  );
};

const NaviItemAddRecipe = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onClickHandler = () => {
    setIsShowModal(true);
  };

  const onCloseHandler = () => {
    setIsShowModal(false);
  };

  return (
    <React.Fragment>
      {isShowModal && <Modal isShow={isShowModal} onClose={onCloseHandler} />}
      <li className="nav__item">
        <button
          className="nav__btn nav__btn--add-recipe"
          onClick={onClickHandler}
        >
          <svg className="nav__icon">
            <use href={`${svg}#icon-edit`}></use>
          </svg>
          <span>Add recipe</span>
        </button>
      </li>
    </React.Fragment>
  );
};

const NaviItemBookmarks = () => {
  return (
    <li className="nav__item">
      <button className="nav__btn nav__btn--bookmarks">
        <svg className="nav__icon">
          <use href={`${svg}#icon-bookmark`}></use>
        </svg>
        <span>Bookmarks</span>
        <Bookmarks />
      </button>
    </li>
  );
};

const Bookmarks = () => {
  return (
    <div className="bookmarks">
      <ul className="bookmarks__list">
        <div className="message">
          <div>
            <svg>
              <use href={`${svg}#icon-smile`}></use>
            </svg>
          </div>
          <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
        </div>
      </ul>
    </div>
  );
};

export default Navibar;
