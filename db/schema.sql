DROP DATABASE IF EXISTS cryptoflip_db;


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
=======
-- CREATE TABLE transactions
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	currency VARCHAR(20),
--   coinsowned INTEGER,
-- 	buyingpower INTEGER,
-- 	amtpurchased INTEGER,
-- 	avgcost INTEGER,
-- 	equityvalue INTEGER,
-- 	PRIMARY KEY (id)
-- );
--  KEY (id)
-- );
