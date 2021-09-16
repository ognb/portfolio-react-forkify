import React from "react";
import logo from "../../img/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      {props.children}
    </header>
  );
};

export default Header;
