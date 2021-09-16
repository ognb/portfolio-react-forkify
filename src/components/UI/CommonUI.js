import svg from "../../img/icons.svg";

export const Spinner = () => {
  return (
    <div className="spinner">
      <svg>
        <use href={`${svg}#icon-loader`}></use>
      </svg>
    </div>
  );
};

export const Error = () => {
  return (
    <div className="error">
      <div>
        <svg>
          <use href={`${svg}#icon-alert-triangle`}></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
};

export const Copyright = () => {
  return (
    <p className="copyright">
      &copy; Copyright by &nbsp;
      <a
        className="twitter-link"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/jonasschmedtman"
      >
        Jonas Schmedtmann
      </a>
      . Use for learning or your portfolio. Don't use to teach. Don't claim as
      your own.
    </p>
  );
};

export const Message = (props) => {
  const icon = props.type === "error" ? "#icon-alert-triangle" : "#icon-smile";
  return (
    <div className="message">
      <div>
        <svg>
          <use href={`${svg}${icon}`}></use>
        </svg>
      </div>
      <p>{props.message}</p>
    </div>
  );
};

export const BtnPage = (props) => {
  const type = props.type === "prev" ? "left" : "right";
  return (
    <button
      data-goto={props.goto}
      className={`btn--inline pagination__btn--${props.type}`}
      onClick={props.onClick}
    >
      <svg className="search__icon">
        <use href={`${svg}#icon-arrow-${type}`}></use>
      </svg>
      <span>{`Page ${props.goto}`}</span>
    </button>
  );
};

export const Wrapper = (props) => props.children;
