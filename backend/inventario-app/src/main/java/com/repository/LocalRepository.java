package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Locales;

public interface LocalRepository extends JpaRepository<Locales, Long> {
    // Métodos personalizados opcionales
}
