package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Inventario;
import com.model.Locales;
import com.model.Producto;

import java.util.List;
import java.util.Optional;

public interface InventarioRepository extends JpaRepository<Inventario, Long> {
    Optional<Inventario> findByProductoIdAndLocalId(Long productoId, Long localId);
    List<Inventario> findByLocalId(Long localId);
}