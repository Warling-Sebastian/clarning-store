import React from "react";
import "../components-css/atomos-css.css"
import { Link } from "react-router-dom";
function List() {
  return (
    <div>
      <ul className="Contenedor-list">
        <Link href="#">
          <li>HOME</li>
        </Link>
        <Link href="#">
          <li>GALLERY</li>
        </Link>
        <Link href="#">
          <li>INFO</li>
        </Link>
        <Link href="#">
          <li>EVENTS</li>
        </Link>
        <Link href="#">
          <li>STORE LOCATION</li>
        </Link>
        <Link href="#">
          <li>CONTACT US</li>
        </Link>
        <Link href="#">
          <li>SIGN UP</li>
        </Link>
        <Link href="#">
          <li>SIGN IN</li>
        </Link>
      </ul>
    </div>
  );
}

export default List;
