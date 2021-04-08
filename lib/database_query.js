const { Pool } = require('pg');
const dbParams = require('./db.js');
const db = new Pool(dbParams);
db.connect();


//Database Query function to get items with category_id and on completion status
const gettasksWithCategory = function (categoryid, userid, completed) {
  return db.query(`SELECT title ,tasks.id,users.name  FROM tasks JOIN users ON user_id = users.id WHERE user_id = $1 AND category_id = $2 AND completed = $3`, [userid, categoryid, completed])
    .then(res => {
      if (res.rows[0]) {
        return (res.rows)
      } else return null;
    });
}
exports.gettasksWithCategory = gettasksWithCategory;


// Database Query  to add new task to the database.
const insertNewTask = function (dataobj, title, userid) {
  return db.query(`INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ;`, [`${title}`, `${dataobj.description}`, `${dataobj.imageurl}`,
  `${dataobj.completed}`, userid, `${dataobj.category_id}`]
  ).then(res => res.rows);
}
exports.insertNewTask = insertNewTask;


// Database Query to get a particular task with a task_id
const gettaskwithtaskId = function (taskid) {
  return db.query(`SELECT  users.name,title, description, imageurl, type, tasks.id FROM users JOIN tasks ON users.id = user_id  JOIN categories ON categories.id=category_id WHERE tasks.id =$1`, [taskid])
    .then(res => {
      if (res.rows[0]) {
        return (res.rows)
      } else return null;
    });
}
exports.gettaskwithtaskId = gettaskwithtaskId;


//Database Query to update a task as completed
const updateTaskcompleted = function (taskid) {
  return db.query(`UPDATE  tasks SET completed = true WHERE tasks.id = $1 RETURNING * ;`, [taskid])
    .then(res => res.rows);
}
exports.updateTaskcompleted = updateTaskcompleted;


//Database Query to delete Task with a particular taskid.
const deleteTask = function (taskid) {
  return db.query(`DELETE FROM tasks WHERE tasks.id = $1 RETURNING * ;`, [taskid])
    .then(res => res.rows);
}
exports.deleteTask = deleteTask;

//Database Query to update Description
const updatedescription = function (value, taskid) {
  return db.query(`UPDATE  tasks SET description = $1 WHERE tasks.id = $2 RETURNING * ;`, [`${value}`, taskid])
    .then(res => res.rows);
}
exports.updatedescription = updatedescription;

//Database Query to update Category
const updateCategory = function (value, taskid) {
  return db.query(`UPDATE  tasks SET category_id = $1 WHERE tasks.id = $2 RETURNING * ;`, [value, taskid])
    .then(res => res.rows);
}
exports.updateCategory = updateCategory;

// Database Query to get details with UserId
const getuserbyId = function (userid) {
  return db.query(`SELECT *  FROM  users  WHERE id = $1`, [userid])
    .then(res => res.rows);
}
exports.getuserbyId = getuserbyId;
