import React, { useState } from 'react';
import api from '../../services/api';

function InventarioForm() {
  const [productoId, setProductoId] = useState('');
  const [localId, setLocalId] = useState('');
  const [stock, setStock] = useState('');
  const [ventas, setVentas] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/inventario', {
      producto: { id: parseInt(productoId) },
      local: { id: parseInt(localId) },
      stock: parseInt(stock),
      ventas: parseInt(ventas)
    })
    .then(() => {
      setMensaje('✅ Inventario registrado correctamente');
      handleReset();
    })
    .catch(() => {
      setMensaje('❌ Error al registrar inventario');
    });
  };

  const handleReset = () => {
    setProductoId('');
    setLocalId('');
    setStock('');
    setVentas('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-success">📦 Registrar Inventario</h2>

      {mensaje && (
        <div className={`alert ${mensaje.includes('Error') ? 'alert-danger' : 'alert-success'}`} role="alert">
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-sm">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">ID del Producto</label>
            <input
              type="number"
              className="form-control"
              value={productoId}
              onChange={(e) => setProductoId(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">ID del Local</label>
            <input
              type="number"
              className="form-control"
              value={localId}
              onChange={(e) => setLocalId(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Stock</label>
            <input
              type="number"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ventas</label>
            <input
              type="number"
              className="form-control"
              value={ventas}
              onChange={(e) => setVentas(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-end gap-3">
          <button type="submit" className="btn btn-primary">
            💾 Guardar
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            🧹 Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default InventarioForm;
