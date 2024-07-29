import React from "react";
import "../components-css/atomos-css.css";
import logo from "../assets/Logo.png";

export function Logo() {
  return (
    <div className="FontLogo">
      <h2>Zone</h2>
      <img width={"150px"} src={logo} alt="Logo" />
      <h2>Clear</h2>
    </div>
  );
}
