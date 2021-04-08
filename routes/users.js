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
    const str = req.body.text;
     const title =str.charAt(0).toUpperCase() + str.slice(1);
    const userid = req.cookies.user_id
    const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${req.body.text}`;
    axios.get(url)
      .then(result => {
          return findCategory(result.data.items);
      })
      .then((dataobj) => {
        return db.insertNewTask(dataobj, title, userid);
      }).then((result) => {
        if (result[0].category_id !== 5) {
          res.redirect(`/user/tasks`);
        } else {
          res.redirect(`/user/tasks/${result[0].id}`);
        }
      })
      .catch(err => console.log(err));
  });


  // homepage of user with a particular user:ID
  router.get('/tasks', (req, res) => {
    let templatevar = {}
    db.gettasksWithCategory(1, req.cookies.user_id, false).
      then(result => {
        templatevar["Movies"] = result;
        return db.gettasksWithCategory(2, req.cookies.user_id, false);
      }
      ).then(result => {
        templatevar["Products"] = result;
        return db.gettasksWithCategory(3, req.cookies.user_id, false);
      }).then(result => {
        templatevar["Restaurants"] = result;
        return db.gettasksWithCategory(4, req.cookies.user_id, false);
      }).then(result => {
        templatevar["Books"] = result;
        console.log(templatevar);
        res.render("index", templatevar);
      });
  });


  //renders a page for specific task
  router.get('/tasks/:taskId', (req, res) => {
    if(req.cookies.user_id) {
    let templatevar = {};
    db.gettaskwithtaskId(req.params.taskId)
      .then(result => {
        templatevar["task"] = result;
        console.log(templatevar);
        res.render("task_description", templatevar);
      });
    } else {
      res.redirect("/");
    }
  });


  //complete a particular page
  router.post('/:taskId/complete', (req, res) => {
    db.updateTaskcompleted(req.params.taskId)
      .then((results) => {
        res.redirect("/user/tasks");
      });
  });

  // delete a particular page
  router.post('/:taskId/delete', (req, res) => {
    db.deleteTask(req.params.taskId)
      .then((results) => {
        res.redirect("/user/tasks");
      });
  });

  //Edit a particular task
  router.post('/:taskId/edit', (req, res) => {
    let newCategory_id;
    if (req.body.type) {
      if (req.body.type === "Product") {
        newCategory_id = 2;
      } else if (req.body.type === "Book") {
        newCategory_id = 4;
      } else if (req.body.type === "Restaurant") {
        newCategory_id = 3;
      } else if (req.body.type === "Movie") {
        newCategory_id = 1;
      }
    }
    //check howmany parameters are changed AND CORRECTE ACCORDINGLY
    if (req.body.description && req.body.type) {
      db.updatedescription(req.body.description, req.params.taskId)
        .then(() => {
          db.updateCategory(newCategory_id, req.params.taskId)
        })
        .then(() => {
          res.redirect("/user/tasks");
        });
    } else if (req.body.description) {
      db.updatedescription(req.body.description, req.params.taskId)
        .then(() => {
          res.redirect("/user/tasks");
        })
    } else if (req.body.type) {
      db.updateCategory(newCategory_id, req.params.taskId)
        .then(() => {
          res.redirect("/user/tasks");
        });
    } else {
      res.redirect("/user/tasks");
    }

  });

  // route for completed list
  router.get('/completed', (req, res) => {
    let templatevar = {}
    db.gettasksWithCategory(1, req.cookies.user_id, true).
      then(result => {
        templatevar["Movies"] = result;
        return db.gettasksWithCategory(2, req.cookies.user_id, true);
      }
      ).then(result => {
        templatevar["Products"] = result;
        return db.gettasksWithCategory(3, req.cookies.user_id, true);
      }).then(result => {
        templatevar["Restaurants"] = result;
        return db.gettasksWithCategory(4, req.cookies.user_id, true);
      }).then(result => {
        templatevar["Books"] = result;
        console.log('templateComplete', templatevar)
        res.render("completed", templatevar);
      });
  });

  // route for update profile
  router.get('/:userId',(req,res)=>{
    if(req.cookies.user_id === req.params.userId) {
    let userid = req.cookies.user_id;
    let templatevar ={};
    db.getuserbyId(userid)
    .then((result)=>{
     templatevar["user"] = result;
     console.log(templatevar);
     res.render("profile", templatevar)
    });
  } else {
    res.redirect("/");
  }
  });

  return router;
};

