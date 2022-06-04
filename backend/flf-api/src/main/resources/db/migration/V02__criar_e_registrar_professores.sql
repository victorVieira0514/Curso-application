CREATE TABLE professor (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	endereco VARCHAR(50) NOT NULL,
	cpf VARCHAR(14) NOT NULL,
	rg VARCHAR(14) NOT NULL,
	telefone VARCHAR(30)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO professor (nome, endereco, cpf, rg, telefone) values ('Pedro Silva', 'Mondubim', '012.323.422.83', '2028304953-1', '91234-1231');
INSERT INTO professor (nome, endereco, cpf, rg, telefone) values ('Yan Marques', 'Caucaia', '014.343.412.84', '2028314123-1', '91334-1121');
INSERT INTO professor (nome, endereco, cpf, rg, telefone) values ('Alice Silva', 'Aldeota', '034.323.432.81', '2021214133-1', '91324-1331');
INSERT INTO professor (nome, endereco, cpf, rg, telefone) values ('Roberto Silva', 'Aldeota', '034.323.422.11', '2021214133-1', '93324-1312');
INSERT INTO professor (nome, endereco, cpf, rg, telefone) values ('Lara Silva', 'Aldeota', '034.323.422.31', '2012314133-1', '91432-1333');