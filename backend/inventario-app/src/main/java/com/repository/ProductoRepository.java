package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Puedes agregar métodos personalizados si lo necesitas
}
