
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProductoForm from './ProductoForm';
import ProductoList from './ProductoList';

function ProductoTabs() {
  const [key, setKey] = useState('registrar');
  const [recargarLista, setRecargarLista] = useState(false);

  const handleSelect = (k) => {
    setKey(k);
    if (k === 'lista') {
      setRecargarLista(true); // activa recarga
      setTimeout(() => setRecargarLista(false), 100); // desactiva después de un momento
    }
  };

  return (
    <div className="container mt-5">
      <Tabs
        id="producto-tabs"
        activeKey={key}
        onSelect={handleSelect}
        className="mb-3"
        fill
      >
        <Tab eventKey="registrar" title="📝 Registrar Producto">
          <ProductoForm />
        </Tab>
        <Tab eventKey="lista" title="📋 Lista de Productos">
          <ProductoList recargar={recargarLista} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProductoTabs;
