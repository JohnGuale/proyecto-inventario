import React, { useState } from 'react';
import api from '../../services/api';

function ProductoForm() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/productos', { nombre,descripcion, precio: parseFloat(precio) })
      .then(() => {
        setMensaje('✅ Producto registrado');
        setNombre('');
        setDescripcion('');
        setPrecio('');
      })
      .catch(() => setMensaje('❌ Error al registrar producto'));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">🛒 Registrar Producto</h2>
      {mensaje && <div className={`alert ${mensaje.includes('Error') ? 'alert-danger' : 'alert-success'}`}>{mensaje}</div>}
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input type="text" className="form-control" value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">💾 Guardar Producto</button>
      </form>
    </div>
  );
}

export default ProductoForm;
