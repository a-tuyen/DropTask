// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

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
const key = process.env.DB_KEY;
const cx = process.env.DB_CX
const request = require('request');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

app.post('/tasks', (req, res) => {
  console.log(req.body)
  console.log(req.body.text)

  // const data = JSON.parse(req.body)
  // console.log('data', data)
  // findCategory(req.body.text)
  request(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${req.body.text}`, (error, response, body) => {
  let data =JSON.parse(body);
  console.log(data.items[0].displayLink)
  findCategory(data.items[1], req.body.text);
});

  // pool.query(INSERT INTO )
  // const shortURL = generateRandomString();
  // const longURL = 'http://' + req.body.longURL;
  // const userID = req.session.userID;
  // urlDatabase[shortURL] = {
  //   longURL,
  //   userID,
  // };
  // return res.redirect('/urls/' + shortURL);
  console.log('it worked')
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
