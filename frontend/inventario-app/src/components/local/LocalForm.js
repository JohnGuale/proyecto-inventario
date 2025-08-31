import React, { useState } from 'react';
import api from '../../services/api';

function LocalForm() {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/locales', { nombre, direccion })
      .then(() => {
        setMensaje('✅ Local registrado');
        setNombre('');
        setDireccion('');
      })
      .catch(() => setMensaje('❌ Error al registrar Local'));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">🛒 Registrar Local</h2>
      {mensaje && <div className={`alert ${mensaje.includes('Error') ? 'alert-danger' : 'alert-success'}`}>{mensaje}</div>}
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input type="text" className="form-control" value={direccion} onChange={e => setDireccion(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">💾 Guardar Local</button>
      </form>
    </div>
  );
}

export default LocalForm;
