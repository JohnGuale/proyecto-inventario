import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './Home';
import Productos from './pages/Productos';
import Inventario from './pages/Inventario';
import Locales from './pages/Locales';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/locales" element={<Locales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
