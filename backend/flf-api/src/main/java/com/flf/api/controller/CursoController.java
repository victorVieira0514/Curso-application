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

import com.flf.api.model.Curso;
import com.flf.api.repository.CursoRepository;
import com.flf.api.repository.curso.CursoRepositoryQuery;
import com.flf.api.service.CursoService;

@RestController
@RequestMapping("/cursos")
public class CursoController {

	@Autowired
    private CursoRepository cursoRepository;

	@Autowired
    private CursoService cursoService;
	
	@Autowired
	private CursoRepositoryQuery cursoRepositoryQuery;
	
    @GetMapping
    public List<Curso> listar() {
        return cursoRepository.findAll();
    }

	@PostMapping
	public ResponseEntity<Curso> criar(@Valid @RequestBody Curso curso, HttpServletResponse response) {
    	Long totalCursos = cursoRepositoryQuery.retornaTotalCursos(curso);
    	int totalAceito = 6;
	
		if(totalCursos > (totalAceito - 1)) {
			throw new Error("O limite de cadastro para cursos foi ultrapassado. Limite atual: " + totalAceito);
		} else {
			Curso cursoSalvo = cursoRepository.save(curso);		
			
			URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}")
					.buildAndExpand(cursoSalvo.getCodigo()).toUri();
			response.setHeader("Location", uri.toASCIIString());
			
			return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
		}
	}
    
	@GetMapping("/{codigo}")
	public ResponseEntity<Curso> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Curso> curso = cursoRepository.findById(codigo);
		return curso.isPresent() ? ResponseEntity.ok(curso.get()) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Curso> atualizar(@PathVariable Long codigo, @Valid @RequestBody Curso curso) {
		Curso cursoSalvo = cursoService.atualizar(codigo, curso);
		return ResponseEntity.ok(cursoSalvo);
	}

    @DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		this.cursoRepository.deleteById(codigo);
	}
}
