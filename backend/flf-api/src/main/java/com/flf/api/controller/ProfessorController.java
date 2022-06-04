package com.flf.api.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.flf.api.model.Professor;
import com.flf.api.repository.ProfessorRepository;
import com.flf.api.service.ProfessorService;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@Autowired
	private ProfessorService professorService;

    @GetMapping
    public List<Professor> listar() {
        return professorRepository.findAll();
    }
   
    @PostMapping
	public ResponseEntity<Professor> criar(@Valid @RequestBody Professor professor, HttpServletResponse response) {
    	Professor professorSalvo = professorRepository.save(professor);		
		
    	URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}")
    			.buildAndExpand(professorSalvo.getCodigo()).toUri();
    		response.setHeader("Location", uri.toASCIIString());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(professorSalvo);
	}
    
	@GetMapping("/{codigo}")
	public ResponseEntity<Professor> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Professor> professor = professorRepository.findById(codigo);
		return professor.isPresent() ? ResponseEntity.ok(professor.get()) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Professor> atualizar(@PathVariable Long codigo, @Valid @RequestBody Professor professor) {
		Professor pessoaSalva = professorService.atualizar(codigo, professor);
		return ResponseEntity.ok(pessoaSalva);
	}

    @DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		this.professorRepository.deleteById(codigo);
	}
}
