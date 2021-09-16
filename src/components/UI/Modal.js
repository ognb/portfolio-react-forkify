import React from "react";
import reactDom from "react-dom";

import svg from "../../img/icons.svg";

const ModalOverlay = (props) => {
  return (
    <div className={`overlay ${props.isShow}`} onClick={props.onClose}></div>
  );
};

const ModalAddRecipeWindow = (props) => {
  return (
    <div className={`add-recipe-window ${props.isShow}`}>
      <button className="btn--close-modal" onClick={props.onClose}>
        &times;
      </button>
      <form className="upload">
        <div className="upload__column">
          <h3 className="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST23" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div className="upload__column">
          <h3 className="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button className="btn upload__btn">
          <svg>
            <use href={`${svg}#icon-upload-cloud`}></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>
  );
};

const Modal = (props) => {
  const isShow = props.isShow ? "" : "hidden";
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <ModalOverlay isShow={isShow} onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
      {reactDom.createPortal(
        <ModalAddRecipeWindow isShow={isShow} onClose={props.onClose} />,
        document.getElementById("add-recipe-window")
      )}
    </React.Fragment>
  );
};

export default Modal;
