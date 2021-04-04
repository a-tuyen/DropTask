-- Drop and recreate Categories and Tasks table (Example);

DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  task_id INTEGER REFERENCES tasks(id),
  type VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR (255),
  description VARCHAR (255),
  imageurl  VARCHAR(255)
  created_at DATE
  due_date  DATE
  completed_date DATE
  user_id  INTEGER REFERENCES users(id)
  category_id INTEGER REFERENCES categories(id)
)

