
package com.service;

import com.model.Locales;
import com.repository.LocalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocalService {

    @Autowired
    private LocalRepository localRepository;

    public List<Locales> listarTodos() {
        try {
            return localRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error al listar los locales", e);
        }
    }

    public Optional<Locales> obtenerPorId(Long id) {
        try {
            return localRepository.findById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error al obtener el local con ID " + id, e);
        }
    }

    public Locales guardar(Locales local) {
        try {
            return localRepository.save(local);
        } catch (Exception e) {
            throw new RuntimeException("Error al guardar el local", e);
        }
    }

    public void eliminar(Long id) {
        try {
            if (!localRepository.existsById(id)) {
                throw new RuntimeException("No se puede eliminar: el local con ID " + id + " no existe");
            }
            localRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error al eliminar el local con ID " + id, e);
        }
    }
}
