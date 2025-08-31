
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import LocalForm from './LocalForm';
import LocalList from './LocalList';

function LocalTabs() {
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
        id="local-tabs"
        activeKey={key}
        onSelect={handleSelect}
        className="mb-3"
        fill
      >
        <Tab eventKey="registrar" title="📝 Registrar Local">
          <LocalForm />
        </Tab>
        <Tab eventKey="lista" title="📋 Lista de Locales">
          <LocalList recargar={recargarLista} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default LocalTabs;
