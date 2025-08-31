
package com.service;

import com.model.Inventario;
import com.repository.InventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventarioService {

    @Autowired
    private InventarioRepository inventarioRepository;

    public Inventario asignarProducto(Inventario inventario) {
        try {
            return inventarioRepository.save(inventario);
        } catch (Exception e) {
            throw new RuntimeException("Error al asignar producto al inventario", e);
        }
    }

    public Inventario actualizarStockYVentas(Long id, int nuevoStock, int nuevasVentas) {
        Inventario inv = inventarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Inventario con ID " + id + " no encontrado"));

        try {
            inv.setStock(nuevoStock);
            inv.setVentas(nuevasVentas);
            return inventarioRepository.save(inv);
        } catch (Exception e) {
            throw new RuntimeException("Error al actualizar stock y ventas del inventario", e);
        }
    }

    public List<Inventario> listarPorLocal(Long localId) {
        try {
            return inventarioRepository.findByLocalId(localId);
        } catch (Exception e) {
            throw new RuntimeException("Error al listar inventario por local con ID " + localId, e);
        }
    }

    public Optional<Inventario> buscarPorProductoYLocal(Long productoId, Long localId) {
        try {
            return inventarioRepository.findByProductoIdAndLocalId(productoId, localId);
        } catch (Exception e) {
            throw new RuntimeException("Error al buscar inventario por producto y local", e);
        }
    }
}
