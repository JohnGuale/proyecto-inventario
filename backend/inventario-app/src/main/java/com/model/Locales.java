package com.model;

import jakarta.persistence.*;

@Entity
public class Locales {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "local_seq")
	@SequenceGenerator(name = "local_seq", sequenceName = "local_seq", allocationSize = 1)
	private Long id;

    private String nombre;

    private String direccion;

    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public String getNombre() {
      return nombre;
    }

    public void setNombre(String nombre) {
      this.nombre = nombre;
    }

    public String getDireccion() {
      return direccion;
    }

    public void setDireccion(String direccion) {
      this.direccion = direccion;
    }

    // Getters y Setters
}
