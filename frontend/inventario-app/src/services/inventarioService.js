import api from './api';

export const registrarInventario = (data) => api.post('/inventario', data);
export const actualizarInventario = (id, data) => api.put(`/inventario/${id}`, data);
export const consultarInventarioPorLocal = (localId) => api.get(`/inventario/local/${localId}`);
