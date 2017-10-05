DROP DATABASE IF EXISTS cryptoflip_db;


CREATE DATABASE cryptoflip_db;
USE cryptoflip_db;

CREATE TABLE currencies
(
	id int NOT NULL AUTO_INCREMENT,
	currency INTEGER NOT NULL,
  	buyingPower INTEGER NOT NULL,
	amtPurchased INTEGER NOT NULL,
	equityvalue INTEGER NOT NULL,
	timestamp TIMESTAMP,
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
