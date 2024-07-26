import React from "react";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="App">
      <div className='Background'></div>
      <header className="App-header">
        <div className='Form-container'>
          <div className="Form-img-container">
          <span className="logotext">Zone</span><img src="/logo.png" alt="Logo" className="Form-img"></img> <span className="logotext">Clear</span>
          </div>
          <h1>Registrarse</h1>
          <form className='Form-register' method='#' target='_self'>
            <input type='text' name='Nombre' className='Name' placeholder='Ingrese su Nombre...'></input> <br></br>
            <input type='text' className='Lname' placeholder='Ingrese su Apellido...'></input> <br></br>
            <input type='email' className='Email' placeholder='Ingrese su Correo...'></input> <br></br>
            <input type='password' className='Pkey' placeholder='Ingrese su Contraseña...'></input> <br></br>
            <button type='submit'>Registrarse</button>
            <p>Ya tienes una Cuenta? <Link to="/Login">Inicia Sesion</Link></p>
          </form>
        </div>
      </header>
    </div>
    )
}

export default Register;