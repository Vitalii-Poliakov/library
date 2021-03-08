import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <ul>
        <li>
          <Link className="menu-link" to="/library" onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="menu-link"
            to="/library/about"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
