const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

//function to get items with category
const gettasksWithCategory = function(categoryid,userid,completed) {
  return  db.query(`SELECT title ,tasks.id,users.name  FROM tasks JOIN users ON user_id = users.id WHERE user_id = $1 AND category_id = $2 AND completed = $3`,[userid,categoryid,completed] )
  .then(res => {
    if(res.rows[0]) {
    return (res.rows)
    } else  return null;
  });
}
exports.gettasksWithCategory = gettasksWithCategory;


// function for inserting new object to database
const insertNewTask = function(dataobj,title,userid){
return db.query(`INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ;`,[`${title}`,`${dataobj.description}`,`${dataobj.imageurl}`,
      `${dataobj.completed}`,userid ,`${dataobj.category_id}`]
).then (res => res.rows);
}
exports.insertNewTask = insertNewTask;

// gettaskwith task_id
const gettaskwithtaskId = function(taskid){
  return db.query(`SELECT  users.name,title, description, imageurl, type, tasks.id FROM users JOIN tasks ON users.id = user_id  JOIN categories ON categories.id=category_id WHERE tasks.id =$1`,[taskid])
  .then(res => {
    if(res.rows[0]) {
    return (res.rows)
    } else  return null;
  });
}
exports.gettaskwithtaskId = gettaskwithtaskId;

//update task as completed

const updateTaskcompleted = function(taskid){
  return db.query(`UPDATE  tasks SET completed = true WHERE tasks.id = $1 RETURNING * ;`,[taskid])
  .then(res => res.rows);
}
exports.updateTaskcompleted = updateTaskcompleted;


//delete a particular task

const deleteTask = function(taskid){
  return db.query(`DELETE FROM tasks WHERE tasks.id = $1 RETURNING * ;`,[taskid])
  .then(res => res.rows);
}
exports.deleteTask = deleteTask;

//updatdescription
const updatedescription= function(value,taskid){
  return db.query(`UPDATE  tasks SET description = $1 WHERE tasks.id = $2 RETURNING * ;`,[`${value}`, taskid])
  .then(res => res.rows);
}
exports.updatedescription = updatedescription;

//updatecategory
const updateCategory= function(value,taskid){
  return db.query(`UPDATE  tasks SET category_id = $1 WHERE tasks.id = $2 RETURNING * ;`,[value, taskid])
  .then(res => res.rows);
}
exports.updateCategory = updateCategory;
