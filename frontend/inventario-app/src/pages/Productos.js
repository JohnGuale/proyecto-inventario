import React from 'react';
import ProductoTabs from '../components/producto/ProductoTabs';

function Productos() {
  return (
    <div>
      <h1 className="text-center text-primary mb-4">Gestión de Productos</h1>
      <ProductoTabs />
    </div>
  );
}

export default Productos;