package com.model;

import jakarta.persistence.*;

@Entity
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_seq")
	@SequenceGenerator(name = "producto_seq", sequenceName = "producto_seq", allocationSize = 1)
	private Long id;


    private String nombre;

    private String descripcion;

    private int precio;

    //private LocalDateTime creadoEn = LocalDateTime.now();

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

    public String getDescripcion() {
      return descripcion;
    }

    public void setDescripcion(String descripcion) {
      this.descripcion = descripcion;
    }

    public int getPrecio() {
      return precio;
    }

    public void setPrecio(int precio) {
      this.precio = precio;
    }

    // Getters y Setters
}
