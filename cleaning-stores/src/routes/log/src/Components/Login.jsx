import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";
function Login() {
  return (
    <div className="App">
      <div className="Background"></div>
      <header className="App-header">
        <div className="Form-container">
          <div className="Form-img-container">
            <span className="logotext">Zone</span>
            <img src={Logo} alt="Logo" className="Form-img"></img>
            <span className="logotext">Clear</span>
          </div>
          <h1>Iniciar Sesión</h1>
          <form className="Form-login">
            <input
              type="email"
              className="Email input"
              placeholder="Ingrese su Correo..."
            />
            <br />
            <input
              type="password"
              className="Pkey input"
              placeholder="Ingrese su Contraseña..."
            />
            <br />
            <button className="button" type="submit">
              Iniciar Sesión
            </button>
            <p>
              ¿No tienes una Cuenta?
              <Link to="/" className="a">
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
