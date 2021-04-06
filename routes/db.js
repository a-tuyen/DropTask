const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

//function to get items with category
const gettasksWithCategory = function(categoryid,userid) {
  return  db.query(`SELECT title ,tasks.id FROM tasks JOIN users ON user_id = users.id WHERE user_id = $1 AND category_id = $2`,[userid,categoryid] )
  .then(res => {
    if(res.rows[0]) {
    return (res.rows[0])
    } else  return null;
  }
); }


exports.gettasksWithCategory = gettasksWithCategory;
// function for inserting new object to database
const insertNewTask = function(dataobj,title,userid){
return db.query(`INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ;`,[`${title}`,`${dataobj.description}`,`${dataobj.imageurl}`,
      `${dataobj.completed}`,userid ,`${dataobj.category_id}`]
).then (res => res.rows);
}
exports.insertNewTask = insertNewTask;
