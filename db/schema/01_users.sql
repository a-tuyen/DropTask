-- Drop and recreate Users table
<<<<<<< HEAD
=======
CREATE DATABASE to-do-list;

>>>>>>> be741731d7053c071aba51e13435f1097317a456
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  password VARCHAR(255)NOT NULL
);

