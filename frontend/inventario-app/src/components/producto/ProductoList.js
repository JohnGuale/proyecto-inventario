
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function ProductoList({ recargar }) {
  const [productos, setProductos] = useState([]);

  const cargarProductos = () => {
    api.get('/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al cargar productos:', error));
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  useEffect(() => {
    if (recargar) {
      cargarProductos();
    }
  }, [recargar]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Lista de Productos</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductoList;
