package com.flf.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "curso")
public class Curso {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	private String nomeCurso;
	
	@NotNull
	@OneToOne
	@JoinColumn(name="professor_curso")
	private Professor professorCurso;
	
	@NotNull
	@OneToOne
	@JoinColumn(name = "codigo_categoria")
	private Categoria categoria;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNomeCurso() {
		return nomeCurso;
	}
	
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}

	public Professor getProfessorCurso() {
		return professorCurso;
	}
	
	public void setProfessorCurso(Professor professorCurso) {
		this.professorCurso = professorCurso;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}	
	
}
