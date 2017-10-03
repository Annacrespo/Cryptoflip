DROP DATABASE IF EXISTS cryptoflip_db;


CREATE DATABASE cryptoflip_db;
USE cryptoflip_db;

CREATE TABLE transactions
(
	id int NOT NULL AUTO_INCREMENT,
	currency VARCHAR(20),
    coinsowned INTEGER,
	buyingpower INTEGER,
	amtpurchased INTEGER,
	avgcost INTEGER,
	equityvalue INTEGER,
	timestamps TIMESTAMP, 
	PRIMARY KEY (id)
);
 KEY (id)
);
