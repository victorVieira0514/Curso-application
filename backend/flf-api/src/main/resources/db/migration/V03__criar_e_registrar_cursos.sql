CREATE TABLE curso (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome_curso VARCHAR(50) NOT NULL,
	professor_curso BIGINT(20) NOT NULL,
	codigo_categoria BIGINT(20) NOT NULL,
	FOREIGN KEY (professor_curso) REFERENCES professor(codigo),
	FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO curso (nome_curso, professor_curso, codigo_categoria) values ('Programação Orientada a Objetos',1, 1);
INSERT INTO curso (nome_curso, professor_curso, codigo_categoria) values ('Gestão de transportes', 2, 2);
INSERT INTO curso (nome_curso, professor_curso, codigo_categoria) values ('Enfermagem em Cuidados Intensivos', 3, 3);
INSERT INTO curso (nome_curso, professor_curso, codigo_categoria) values ('Engenharia', 4, 4);
INSERT INTO curso (nome_curso, professor_curso, codigo_categoria) values ('Cálculo Diferencial e Integral', 5, 5);