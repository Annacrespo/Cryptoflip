CREATE DATABASE cryptoflip_db;
USE cryptoflip_db;

CREATE TABLE currencies
(
	id int NOT NULL AUTO_INCREMENT,
	balance INTEGER NOT NULL,
    price INTEGER NOT NULL,
	coin VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);
