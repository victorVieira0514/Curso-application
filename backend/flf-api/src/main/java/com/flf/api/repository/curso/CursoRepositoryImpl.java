package com.flf.api.repository.curso;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.ObjectUtils;

import com.flf.api.model.Curso;

public class CursoRepositoryImpl implements CursoRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public Long retornaTotalCursos(Curso curso) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Curso> root = criteria.from(Curso.class);
		
		Predicate[] predicates = criarRestricoes(curso, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}
	
	private Predicate[] criarRestricoes(Curso curso, CriteriaBuilder builder,
			Root<Curso> root) {
		List<Predicate> predicates = new ArrayList<>();
				
		if(!ObjectUtils.isEmpty(curso.getCategoria()) && !ObjectUtils.isEmpty(curso.getCodigo())) {
			predicates.add(builder.like(
					builder.lower(root.get("nome")), "%" + curso.getCategoria().getNome().toLowerCase() + "%"));
		}

		return predicates.toArray(new Predicate[predicates.size()]);
	}
}
