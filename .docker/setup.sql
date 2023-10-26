CREATE DATABASE IF NOT EXISTS muralis;
USE muralis;

CREATE TABLE IF NOT EXISTS tipo_pagamento (
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(20)
);
INSERT INTO tipo_pagamento(tipo) VALUES("Dinheiro"), ("Débito"), ("Crédito"), ("Pix");

CREATE TABLE IF NOT EXISTS categorias (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
descricao VARCHAR(150)
);
INSERT INTO categorias(nome, descricao) VALUES("Lazer", "Divertimentos para se distrair");

CREATE TABLE IF NOT EXISTS despesas(
id INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(150),
valor INT,
tipo_pagamento_id INT,
categoria_id INT,
data_compra DATETIME,

CONSTRAINT fk_tipo_pagamento_despesa FOREIGN KEY (tipo_pagamento_id) REFERENCES tipo_pagamento(id),
CONSTRAINT fk_categoria_despesa FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);