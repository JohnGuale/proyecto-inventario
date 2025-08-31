import React from 'react';
import InventarioTabs from '../components/inventario/InventarioTabs';

function Inventario() {
  return (
    <div>
      <h1 className="text-center text-primary mb-4">Gestión de Inventarios</h1>
      <InventarioTabs />
    </div>
  );
}

export default Inventario;