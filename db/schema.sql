CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table events.
CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
date TIMESTAMP,
PRIMARY KEY (id)
);

SELECT * FROM burgers;