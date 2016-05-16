CREATE DATABASE  `newburger`;
USE `newburger`;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL,
date TIMESTAMP,
PRIMARY KEY (id)
);