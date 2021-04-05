// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const axios      = require("axios");
const morgan     = require('morgan');
var cookieParser = require('cookie-parser');
app.use(cookieParser())
const key = process.env.DB_KEY;
const cx = process.env.DB_CX

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
// const poolFactory = require('pg/lib/pool-factory');


// to be moved out to router route
const findCategory = require('./routes/api');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above
app.post('/new_tasks', (req, res) => {
  const title = req.body.text;

  const userid =req.cookies.user_id
  console.log(title,userid);
  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${req.body.text}`;
  axios.get(url)
  .then(result => {
    // console.log(result.data.items[0])
    return  findCategory(result.data.items[0]);
  })
.then((dataobj) =>{
console.log(dataobj);
db.query(`INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8)) RETURNING * ;`,[`${title}`,`${dataobj.description}`,`${dataobj.imageurl}`,`${dataobj.completed}`,`${userid}`,`${dataobj.category_id}`]
 )
 })
//  .catch(err => console.log(err));

});

app.get('/login/:userId', (req, res) => {
  // // if using cookie-session middleware
  // req.session.user_id = req.params.userId;
  // if using plaintext cookies
  res.cookie('user_id', req.params.userId);
  // redirect the user somewhere
  res.redirect('/');
});


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
