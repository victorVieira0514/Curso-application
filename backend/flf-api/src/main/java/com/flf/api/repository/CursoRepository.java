package com.flf.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flf.api.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {

}
