package com.controlador;

import com.model.Locales;
import com.service.LocalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/locales")
@CrossOrigin(origins = "*")
public class LocalController {

    @Autowired
    private LocalService localService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Locales> listarLocal() {
        return localService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Locales> obtenerLocal(@PathVariable Long id) {
        return localService.obtenerPorId(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Locales crearLocal(@RequestBody Locales local) {
        return localService.guardar(local);
    }

    @DeleteMapping("/{id}")
    public void eliminarLocal(@PathVariable Long id) {
    	localService.eliminar(id);
    }
}