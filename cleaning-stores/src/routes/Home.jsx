import React from "react";
import {Logo} from "../components/atoms/Logo";
import {Search} from "../components/moleculas/Search";

function Home() {
  return (
    <div>
      <header>
        <Search/>
        <Logo/>
      </header>
    </div>
  );
}

export default Home;
