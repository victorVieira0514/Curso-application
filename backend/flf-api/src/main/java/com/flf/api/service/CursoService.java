package com.flf.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.flf.api.model.Curso;
import com.flf.api.repository.CursoRepository;

@Service
public class CursoService {

	@Autowired
	private CursoRepository cursoRepository;

	public Curso atualizar(Long codigo, Curso Curso) {
		Curso cursoSalvo = buscarCursoPeloCodigo(codigo);
		
		BeanUtils.copyProperties(Curso, cursoSalvo, "codigo");
		return cursoRepository.save(cursoSalvo);
	}

	private Curso buscarCursoPeloCodigo(Long codigo) {
		Curso cursoSalvo =  cursoRepository.findById(codigo)
				.orElseThrow(() -> new EmptyResultDataAccessException(1));

		return cursoSalvo;
	}   
}
