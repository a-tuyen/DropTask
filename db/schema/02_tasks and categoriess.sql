-- Drop and recreate Categories and Tasks table (Example);

DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR (255),
  description VARCHAR (255),
  imageurl  VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  completed BOOLEAN NOT NULL,
  user_id  INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(255) NOT NULL
);
