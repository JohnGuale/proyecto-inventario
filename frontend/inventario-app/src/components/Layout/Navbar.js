import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">InventarioApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/inventario">Inventario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/locales">Locales</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
