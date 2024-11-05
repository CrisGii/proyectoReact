/* import React from "react";

const Nav = () => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle-collapsed"
          data-toggle="collapse"
          data-target="#app-navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="app-navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a data-toggle="modal" href="#login">
              Login
            </a>
          </li>
          <li>
            <a href="#register">Registrar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
 */

import React from "react";

const Navbar = () => (
  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#productos">Productos</a>
    <a href="#acercaNosotros">Acerca de nosotros</a>
    <a href="#soporte">Soporte</a>
    <a href="#login">Iniciar Sesión</a>
    <a href="#register">Registrarse</a>
  </nav>
);

export default Navbar;
