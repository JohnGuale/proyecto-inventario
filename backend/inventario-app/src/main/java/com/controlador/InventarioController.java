package com.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Inventario;
import com.service.InventarioService;

@RestController
@RequestMapping("/api/inventario")
@CrossOrigin(origins = "*")
public class InventarioController {

    @Autowired
    private InventarioService inventarioService;

    @PostMapping
    public Inventario asignarProducto(@RequestBody Inventario inventario) {
        return inventarioService.asignarProducto(inventario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @RequestBody Inventario datos) {
        try {
            Inventario actualizado = inventarioService.actualizarStockYVentas(id, datos.getStock(), datos.getVentas());
            return ResponseEntity.ok(actualizado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/local/{localId}")
    public List<Inventario> consultarPorLocal(@PathVariable Long localId) {
        return inventarioService.listarPorLocal(localId);
    }
}
