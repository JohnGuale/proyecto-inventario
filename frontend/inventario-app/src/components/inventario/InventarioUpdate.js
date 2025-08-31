import React, { useState } from 'react';
import api from '../../services/api';

function InventarioUpdate() {
  const [inventarioId, setInventarioId] = useState('');
  const [stock, setStock] = useState('');
  const [ventas, setVentas] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    api.put(`/inventario/${inventarioId}`, {
      stock: parseInt(stock),
      ventas: parseInt(ventas)
    })
    .then(() => {
      setMensaje('✅ Inventario actualizado');
      setInventarioId('');
      setStock('');
      setVentas('');
    })
    .catch(() => setMensaje('❌ Error al actualizar inventario'));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-warning mb-4">🔄 Actualizar Inventario</h2>
      {mensaje && <div className={`alert ${mensaje.includes('Error') ? 'alert-danger' : 'alert-success'}`}>{mensaje}</div>}
      <form onSubmit={handleUpdate} className="p-4 bg-light border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">ID Inventario</label>
          <input type="number" className="form-control" value={inventarioId} onChange={e => setInventarioId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Nuevo Stock</label>
          <input type="number" className="form-control" value={stock} onChange={e => setStock(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Nuevas Ventas</label>
          <input type="number" className="form-control" value={ventas} onChange={e => setVentas(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">🔧 Actualizar</button>
      </form>
    </div>
  );
}

export default InventarioUpdate;
