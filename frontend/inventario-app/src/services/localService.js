import api from './api';

export const getLocales = () => api.get('/locales');
