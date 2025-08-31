package com;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class ConexionOracleTest implements CommandLineRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void run(String... args) throws Exception {
        try {
            String resultado = jdbcTemplate.queryForObject("SELECT 'Conexión exitosa con Oracle '||sysdate FROM dual", String.class);
            String resultado2 = jdbcTemplate.queryForObject("select p.precio from producto p where p.id = 1", String.class);
            System.out.println(resultado);
            System.out.println(resultado2);
        } catch (Exception e) {
            System.err.println("Error al conectar con Oracle: " + e.getMessage());
        }
    }
}