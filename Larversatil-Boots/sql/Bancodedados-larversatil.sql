/* Criação do banco de dados "Lar Verśatil" */

CREATE DATABASE larversatil;

/* Comando para acessar/ usar o banco */

USE larversatil;

/* Criando Tabela Produtos */

CREATE TABLE  Produtos (
 cod_produtos INTEGER NOT NULL AUTO_INCREMENT,
 id_produtos VARCHAR(20),
 nomeprodutos VARCHAR(100) NOT NULL,
 descricao VARCHAR(500) NOT NULL,
 preco DECIMAL (8,2) NULL,
 precofinal DECIMAL (8,2) NULL,
 nomeimg VARCHAR(255),
 PRIMARY KEY (cod_produtos)
);

/* Inserindo Produtos na tabela */

INSERT INTO Produtos(
id_produtos, nomeprodutos, descricao, preco, precofinal, nomeimg
) VALUES
('geladeira','Geladeira Velai premuim','gaveta dupla e 2 portas - red',5669.90, 5100.99, '../imagens/Produtos/geladeira1.png'),
('geladeira','Geladeira TCL frost free inverse','modelo tradicional',2539.90, 1999.99, '../imagens/Produtos/geladeira2.png'),
('geladeira','Geladeira Velai','gaveta dupla e 2 portas - grey',5459.90, 4849.99,'../imagens/Produtos/geladeira3.png'),
('fogao','Fogão AbC sp','forno duplo de 4 bocas',3220.90, 2849.99,'../imagens/Produtos/fogao1.png'),
('fogao','Fogão prither','forno duplo de 4 bocas',2669.90, 2249.99,'../imagens/Produtos/fogao2.png'),
('microondas','Microondas convecs','aço inox - greyblack',659.90, 586.90,'../imagens/Produtos/microondas1.png'),
('microondas','Microondas philque ','aço inox - white',539.90, 465.55,'../imagens/Produtos/microondas2.png'),
('microondas','Microondas fonit','tradicional - grey',899.90, 769.99,'../imagens/Produtos/microondas3.png'),
('lavadouraderoupas','Lavadoura de Roupas Velai','10 kg - grey',3539.90, 2849.99,'../imagens/Produtos/lavadoura1.png'),
('lavadouraderoupas','Lavadoura de Roupas VVA','8 kg - white',2539.90, 1129.99,'../imagens/Produtos/lavadoura2.png'),
('lavaloucas','Lava-louças convecs','tradicional - greygelo',4539.90, 3849.99,'../imagens/Produtos/lavalouca1.png'),
('lavaloucas','Lava-louças abC sp','tradicional - grey',3789.90, 2649.99,'../imagens/Produtos/lavalouca2.png');

/* Criando a Tabela Pedidos */

CREATE TABLE  Pedidos (
 cod_pedidos INTEGER NOT NULL AUTO_INCREMENT,
 nome_cliente VARCHAR(50),
 endereco VARCHAR(255),
 telefone VARCHAR(20),
 nome_produtos VARCHAR (150),
 valor_unit FLOAT, 
 quantidade INTEGER,
 valor_total FLOAT,
 PRIMARY KEY (cod_pedidos)
 
 );
 
 /* Inserindo dados na tabela Pedidos */ 
 
INSERT INTO Pedidos (nome_cliente, endereco, telefone, nome_produtos, valor_unit, quantidade, valor_total)
VALUES
('Guilherme Among','Rua Talher com faca. nº666, Osasco/SP', 1199999999, 'Geladeira Velai premuim', 5100.00, 1, 5100.00),
('Andressa Bernatti','Rua Prato. nº666, Copacana/RJ', 2188888888, 'Lava-louças abC sp ', 2649.99, 1, 2649.99),
('Emilly Cianeto','Rua Xicara. nº666, Minas Gerais/MG', 3177777777, 'Celular Nokia 5200', 465.55, 3, 1396.65);

CREATE TABLE  comentarios (
 id int AUTO_INCREMENT,
 nome VARCHAR(100),
 msg VARCHAR(600),
 data datetime default now(),
 PRIMARY KEY (id));
 
 
