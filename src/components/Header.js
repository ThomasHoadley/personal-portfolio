import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about" exact>
        About
      </NavLink>
    </header>
  );
}

export default Header;
