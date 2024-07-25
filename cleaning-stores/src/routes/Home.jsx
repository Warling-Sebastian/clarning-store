import React from "react";
import Naver from "../components/organismos/Nav";
import "../css/home.css";
function Home() {
  return (
    <div>
      <div className="Body-home">
        <header>
          <Naver />
          <section className="Fondo-main-home">
          </section>
        </header>
      </div>
    </div>
  );
}

export default Home;
