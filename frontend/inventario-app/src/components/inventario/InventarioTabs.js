
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import InventarioForm from './InventarioForm';
import InventarioList from './InventarioList';
import InventarioUpdate from './InventarioUpdate';

function InventarioTabs() {
  const [key, setKey] = useState('registrar');

  return (
    <div className="container mt-5">
      <Tabs
        id="inventario-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
      >
        <Tab eventKey="registrar" title="📝 Registrar Inventario">
          <InventarioForm />
        </Tab>
        <Tab eventKey="lista" title="📋 Inventario por Local">
          <InventarioList />
        </Tab>
        <Tab eventKey="actualizar" title="🔄 Actualizar Inventario">
          <InventarioUpdate />
        </Tab>
      </Tabs>
    </div>
  );
}

export default InventarioTabs;
