import React, { useState } from 'react';
import api from '../../services/api';

function InventarioList() {
  const [localId, setLocalId] = useState('');
  const [inventario, setInventario] = useState([]);

  const consultar = () => {
    api.get(`/inventario/local/${localId}`)
      .then(res => setInventario(res.data))
      .catch(err => console.error('Error al consultar inventario:', err));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-info">Inventario por Local</h2>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="ID del Local"
          value={localId}
          onChange={(e) => setLocalId(e.target.value)}
        />
        <button className="btn btn-primary" onClick={consultar}>
          Consultar
        </button>
      </div>

      {inventario.length > 0 && (
        <table className="table table-hover table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Ventas</th>
            </tr>
          </thead>
          <tbody>
            {inventario.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.producto.nombre}</td>
                <td>{item.stock}</td>
                <td>{item.ventas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InventarioList;
