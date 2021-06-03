CREATE DATABASE gerenciador_include;

USE gerenciador_include;

CREATE TABLE tb_despesa(
	id_despesa INT PRIMARY KEY AUTO_INCREMENT,
    valor_despesa FLOAT NOT NULL,
    motivo VARCHAR(20) NOT NULL, 
    situacao BOOLEAN 
);

CREATE TABLE tb_receita(
	id_receita INT PRIMARY KEY AUTO_INCREMENT,
    valor_receita FLOAT NOT NULL
);

SELECT * FROM tb_receita;
SELECT * FROM tb_despesa;