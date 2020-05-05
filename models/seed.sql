DROP DATABASE IF EXISTS stocksDB;
CREATE DATABASE stocksDB;

USE stocksDB;

CREATE TABLE stocks(
	symbol VARCHAR (50) NOT NULL,
    price decimal (10,2) NOT NULL,
    date_api varchar(20)  NOT NULL,
    PRIMARY KEY(symbol)
);
