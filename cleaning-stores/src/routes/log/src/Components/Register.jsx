import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";
function Register() {
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
          <h1>Registrarse</h1>
          <form className="Form-register" method="#" target="_self">
            <input
              type="text"
              name="Nombre"
              className="Name input"
              placeholder="Ingrese su Nombre..."
            ></input>
            <br></br>
            <input
              type="text"
              className="Lname input"
              placeholder="Ingrese su Apellido..."
            ></input>
            <br></br>
            <input
              type="email"
              className="Email input"
              placeholder="Ingrese su Correo..."
            ></input>
            <br></br>
            <input
              type="password"
              className="Pkey input"
              placeholder="Ingrese su Contraseña..."
            ></input>
            
            <br></br>
            <button className="button" type="submit">Registrarse</button>
            <p>
              Ya tienes una Cuenta? <Link to="/Login">Inicia Sesion</Link>
            </p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Register;
