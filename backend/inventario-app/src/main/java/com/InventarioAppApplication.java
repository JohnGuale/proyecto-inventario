package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class InventarioAppApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(InventarioAppApplication.class, args);
		//run();

	}	

}
