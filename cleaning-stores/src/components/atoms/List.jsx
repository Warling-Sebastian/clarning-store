import React from "react";
import "../components-css/atomos-css.css";
import { Link } from "react-router-dom";
function List() {
  return (
    <div>
      <ul className="Contenedor-list">
        <Link to='/log/'>
          <li>HOME</li>
        </Link>
        <Link to='/log/'>
          <li>GALLERY</li>
        </Link>
        <Link to='/log/'>
          <li>INFO</li>
        </Link>
        <Link to='/log/'>
          <li>EVENTS</li>
        </Link>
        <Link to='/log/'>
          <li>STORE LOCATION</li>
        </Link>
        <Link to='/log/'>
          <li>CONTACT US</li>
        </Link>
        <Link to='/log/sing_up'>
          <li>SIGN UP</li>
        </Link>
        <Link to='/log/sing_in'>
          <li>SIGN IN</li>
        </Link>
      </ul>
    </div>
  );
}

export default List;
