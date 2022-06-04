package com.flf.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.flf.api.model.Professor;
import com.flf.api.repository.ProfessorRepository;

@Service
public class ProfessorService {
	
	@Autowired
	private ProfessorRepository professorRepository;

	public Professor atualizar(Long codigo, Professor professor) {
		Professor professorSalvo = buscarProfessorPeloCodigo(codigo);
		
		BeanUtils.copyProperties(professor, professorSalvo, "codigo");
		return professorRepository.save(professorSalvo);
	}

	private Professor buscarProfessorPeloCodigo(Long codigo) {
		Professor professorSalvo =  professorRepository.findById(codigo)
				.orElseThrow(() -> new EmptyResultDataAccessException(1));

		return professorSalvo;
	}   
}
