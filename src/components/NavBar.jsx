import React, { useState } from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/electro-logo.png';
import './NavBar.css';

const NavBar = () => {
  const [search, setSearch] = useState('');

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Links de Navegación */}
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Celulares</li>
        <li>PC</li>
        <li>Componentes</li>
        <li>Electrodomésticos</li>
        <li>Contacto</li>
      </ul>

      {/* Buscador */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Buscar</button>
      </div>

      {/* Carrito */}
      <div className="cart-container">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;











