import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function LocalList() {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    api.get('/locales')
      .then(res => setLocales(res.data))
      .catch(err => console.error('Error al cargar locales:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-secondary mb-4"> Locales Disponibles</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {locales.map(local => (
            <tr key={local.id}>
              <td>{local.id}</td>
              <td>{local.nombre}</td>
              <td>{local.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocalList;
