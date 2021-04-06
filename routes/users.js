/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const axios = require('axios');
const router = express.Router();
const key = process.env.DB_KEY;
const cx = process.env.DB_CX;
const findCategory = require('./api');


module.exports = (db) => {

// route for submitting new tasks
  router.post('/new_tasks', (req, res) => {
    const title = req.body.text;
    const userid = req.cookies.user_id
    const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${req.body.text}`;
    axios.get(url)
      .then(result => {
        return findCategory(result.data.items[0]);
      })
      .then((dataobj) => {
        db.insertNewTask(dataobj, title, userid);
      })
      .catch(err => console.log(err));
    res.redirect("/user/tasks")
  });

  // homepage of user with a particular user:ID
  router.get('/tasks', (req, res) => {
    let templatevar = {}
    db.gettasksWithCategory(1, req.cookies.user_id).
    then(result =>{
    templatevar["Movies"] = result;
     return db.gettasksWithCategory(2, req.cookies.user_id);

    }
    ).then(result => {
      templatevar["Products"] = result;
       return db.gettasksWithCategory(3, req.cookies.user_id);

    }). then(result => {
      templatevar["Restaurants"] = result;
      return db.gettasksWithCategory(4, req.cookies.user_id);

    }). then (result =>{
      templatevar["Books"] = result;

    }). then (()=>{
      res.render("index", templatevar);
      console.log(templatevar);

    });

  });
  return router;
};


