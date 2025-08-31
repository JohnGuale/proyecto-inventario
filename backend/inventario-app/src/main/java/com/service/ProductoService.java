
package com.service;

import com.model.Producto;
import com.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> listarTodos() {
        try {
            return productoRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error al listar los productos", e);
        }
    }

    public Optional<Producto> obtenerPorId(Long id) {
        try {
            return productoRepository.findById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error al obtener el producto con ID " + id, e);
        }
    }

    public Producto guardar(Producto producto) {
        try {
            return productoRepository.save(producto);
        } catch (Exception e) {
            throw new RuntimeException("Error al guardar el producto", e);
        }
    }

    public void eliminar(Long id) {
        try {
            if (!productoRepository.existsById(id)) {
                throw new RuntimeException("No se puede eliminar: el producto con ID " + id + " no existe");
            }
            productoRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error al eliminar el producto con ID " + id, e);
        }
    }
}
