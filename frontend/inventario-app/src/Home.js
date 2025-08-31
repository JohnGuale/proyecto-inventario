import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-success mb-4">📊 Bienvenido a InventarioApp</h1>
      <p className="lead">Gestiona productos, inventario y locales de forma rápida y eficiente.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/productos" className="btn btn-primary">Ver Productos</Link>
        <Link to="/inventario" className="btn btn-warning">Registrar Inventario</Link>
        <Link to="/locales" className="btn btn-secondary">Consultar Locales</Link>
      </div>
    </div>
  );
}

export default Home;
