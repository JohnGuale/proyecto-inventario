package com.model;

import jakarta.persistence.*;

@Entity
public class Inventario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "inventario_seq")
    @SequenceGenerator(name = "inventario_seq", sequenceName = "inventario_seq", allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "local_id", nullable = false)
    private Locales local;

    private Integer stock;
    private Integer ventas;

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Producto getProducto() { return producto; }
    public void setProducto(Producto producto) { this.producto = producto; }

    public Locales getLocal() { return local; }
    public void setLocal(Locales local) { this.local = local; }

    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }

    public Integer getVentas() { return ventas; }
    public void setVentas(Integer ventas) { this.ventas = ventas; }
}
