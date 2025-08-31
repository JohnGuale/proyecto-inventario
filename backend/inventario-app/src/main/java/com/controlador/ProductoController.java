package com.controlador;

import com.model.Producto;
import com.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Producto> listarProductos() {
        return productoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Producto> obtenerProducto(@PathVariable Long id) {
        return productoService.obtenerPorId(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Producto crearProducto(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {
        productoService.eliminar(id);
    }
}