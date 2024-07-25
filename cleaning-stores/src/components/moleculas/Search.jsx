import React from "react";
import { Link } from "react-router-dom";
import SearchImput from "../atoms/SearchImput";
import SearchButton from "../atoms/SearchButton";
import logoWs from "../assets/whatsapp.svg";
import logoFb from "../assets/facebook.svg";
import logoTt from "../assets/ticktock.svg";
import logoIg from "../assets/instagram.svg";

export function Search() {
  return (
    <div className="Search">
      <div>
        <p>+1 (809) 943 9787</p>
      </div>
      <div className="Conteiner_Search-imput">
        <SearchImput className={"Search-imput"} />
        <SearchButton />
      </div>
      <div className="Search-icons">
        <Link to={"/"}>
          <img src={logoIg} className="Search-icon" alt="ws" />
        </Link>
        <Link to={"/"}>
          <img src={logoFb} className="Search-icon" alt="ig" />
        </Link>
        <Link to={"/"}>
          <img src={logoTt} className="Search-icon" alt="tt" />
        </Link>
        <Link to={"/"}>
          <img src={logoWs} className="Search-icon" alt="fb" />
        </Link>
      </div>
    </div>
  );
}
