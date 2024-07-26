import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Form-container">
       <div className="Form-img-container">
          <span className="logotext">Zone</span><img src="/logo.png" alt="Logo" className="Form-img"></img> <span className="logotext">Clear</span>
          </div>
      <h1>Iniciar Sesión</h1>
      <form className="Form-login">
        <input type="email" className="Email" placeholder="Ingrese su Correo..." /> <br />
        <input type="password" className="Pkey" placeholder="Ingrese su Contraseña..." /> <br />
        <button type="submit">Iniciar Sesión</button>
        <p>¿No tienes una Cuenta? <Link to="/">Regístrate</Link></p>
      </form>
    </div>
  );
}

export default Login;

