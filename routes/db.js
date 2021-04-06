const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

//function to get items with category
const gettasksWithCategory = function(categoryid,userid) {
  return  db.query(`SELECT title ,tasks.id FROM tasks JOIN users ON user_id = users.id WHERE user_id = $1 AND category_id = $2 AND completed = false`,[userid,categoryid] )
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
  return db.query(`SELECT title, description, imageurl, type,tasks.id FROM tasks JOIN categories ON categories.id=category_id WHERE tasks.id =$1`,[taskid])
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
