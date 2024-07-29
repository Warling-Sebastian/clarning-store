import React from "react";
import { Search } from "../moleculas/Search";
import { Logo } from "../atoms/Logo";
import List from "../atoms/List";
function Naver() {
  return (
    <div className="Nav">
      <div>
        <Search />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}
export default Naver;
