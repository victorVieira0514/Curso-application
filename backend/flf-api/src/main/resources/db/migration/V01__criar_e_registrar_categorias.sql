CREATE TABLE categoria (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categoria (nome) values ('Informatica');
INSERT INTO categoria (nome) values ('Logistica');
INSERT INTO categoria (nome) values ('Enfermagem');
INSERT INTO categoria (nome) values ('Engenharia');
INSERT INTO categoria (nome) values ('Matemática');