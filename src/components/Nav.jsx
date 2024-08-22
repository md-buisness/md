import { React, useState, useEffect } from "react";
import logo_NAME from "src/assets/Downie_Name_yellow.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <li className="nav-links">
          <Link className="links" to="/">
            <img src={logo_NAME} alt="logo" height="75px" />
          </Link>
        </li>
      </div>
      <div className="right">
        <li className="nav-links shopping">
          <Link className="links" to="/shop">
            shop
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Nav;
