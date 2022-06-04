package com.flf.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.flf.api.config.FlfApiProperty;

@SpringBootApplication
@EnableConfigurationProperties(FlfApiProperty.class)
public class FlfApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlfApiApplication.class, args);
	}

}
